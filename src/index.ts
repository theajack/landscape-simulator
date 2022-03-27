import event from 'tc-event';
import {config, initConfig} from './config';
import {EVENT} from './constant';
import {initDomEvent, Orientation} from './event';
import {getContainer, initRotater} from './rotate';
import {IConfigOption} from './types/utils';
import {getScreenSize, isMobile} from './util';

const LandscapeSimulator = {
    init (option: IConfigOption = {}) {
        initConfig(option);
        if (!isMobile() && config.disablePc) return;
        initDomEvent();
        initRotater();
    },
    appendChild (dom: HTMLElement) {
        if (!isMobile() && config.disablePc) {
            document.body.appendChild(dom);
        } else {
            getContainer().appendChild(dom);
        }
    },
    getSimulateSize () {
        const size = getScreenSize();
        if (!this.isSimulateLandscape()) {
            return size;
        }
        return {
            width: size.height,
            height: size.width,
        };
    },
    isSimulateLandscape () {
        if (!isMobile() && config.disablePc) return false;
        return !Orientation.isLandscape;
    },
    onSimulateChange (callback: (bool: boolean) => void) {
        event.regist(EVENT.SIMULATE_CHANGE, callback);
    },
};

if (!document.querySelector('script[auto-simulate=false]')) {
    const disablePc = !document.querySelector('script[disable-pc=false]');
    LandscapeSimulator.init({disablePc});
}

export default LandscapeSimulator;