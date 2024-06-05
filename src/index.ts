/*
 * @Author: chenzhongsheng
 * @Date: 2024-06-05 11:00:22
 * @Description: Coding something
 */
import event from 'tc-event';
import {config, initConfig} from './config';
import {EVENT} from './constant';
import {initDomEvent, Orientation} from './event';
import {getInnerContainer, initRotate} from './rotate';
import {IConfigOption} from './types/utils';
import {getScreenSize, isMobile} from './util';

const LandscapeSimulator = {
    isEnabled () {
        return !(!isMobile() && config.disablePc);
    },
    init (option: IConfigOption = {
        disablePc: true,
    }): Promise<boolean> {
        initConfig(option);
        if (!this.isEnabled()) return Promise.resolve(false);
        initDomEvent();
        initRotate();

        return new Promise((resolve) => {
            event.registOnce(EVENT.SIMULATE_CHANGE, (bool) => {resolve(bool);});
        });

    },
    appendChild (dom: HTMLElement) {
        this.getContainer().appendChild(dom);
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
        if (!this.isEnabled()) return false;
        return !Orientation.isLandscape;
    },
    onSimulateChange (callback: (bool: boolean) => void) {
        event.regist(EVENT.SIMULATE_CHANGE, callback);
    },
    getContainer () {
        return this.isEnabled() ? getInnerContainer() : document.body;
    }
};

if ('undefined' !== typeof document) {
    const script = document.querySelector('script[auto-simulate=true]');
    if (script) {
        const disablePc = script.getAttribute('disable-pc') !== 'false';
        LandscapeSimulator.init({disablePc});
    }
}


export default LandscapeSimulator;