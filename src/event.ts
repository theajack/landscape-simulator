/*
 * @Author: tackchen
 * @Date: 2022-03-27 14:21:41
 * @LastEditors: tackchen
 * @LastEditTime: 2022-03-27 23:21:56
 * @FilePath: /landscape-simulator/src/event.ts
 * @Description: Coding something
 */

import event from 'tc-event';
import {config} from './config';
import {EVENT, ORIENTATION} from './constant';
import {getScreenSize} from './util';

let inited = false;

export const Orientation = {
    isSimulateLandscape: false,
    isLandscape: false,
    value: ORIENTATION.VERTICAL,
    lastLandscape: false,
};

export function setSimulateLandscape (bool: boolean) {
    Orientation.isSimulateLandscape = bool;
}

export function initDomEvent () {
    if (inited) return;
    inited = true;
    initOritetation();
    initOritetationChange();
    initSizeChange();
}

function initOritetation () {
    if (typeof window.onorientationchange !== 'undefined') {
        Orientation.isLandscape = (window.orientation !== ORIENTATION.VERTICAL);
        Orientation.value = window.orientation as number;
    } else {
        if (!config.disablePc) {
            const size = getScreenSize();
            Orientation.isLandscape = (size.width > size.height);
            Orientation.value = Orientation.isLandscape ? ORIENTATION.HORIZONTAL_DEFAULT : ORIENTATION.VERTICAL;
        }
    }
}

function initOritetationChange () {
    const onchange = (isLandscape: boolean, value: number) => {
        Orientation.value = value;
        Orientation.isLandscape = isLandscape;
        // console.log('orientationchange*******', isLandscape, window.innerWidth, window.innerHeight);
        event.emit(EVENT.ORIENTATION_CHANGE, {isLandscape, value});
    };
    if (typeof window.onorientationchange !== 'undefined') {
        window.addEventListener('orientationchange', () => {
            window.setTimeout(() => {
                onchange(window.orientation !== ORIENTATION.VERTICAL, window.orientation as number);
            }, 20);
        }, false);
        return;
    }
    // 如果不支持 onorientationchange ，则使用onresize来判断屏幕旋转方向
    event.regist(EVENT.SIZE_CHANGE, (client) => {
        const isLandscape = (client.width > client.height);
        if (Orientation.isLandscape !== isLandscape) {
            const value = (isLandscape) ? ORIENTATION.VERTICAL : ORIENTATION.HORIZONTAL_LEFT;
            onchange(isLandscape, value);
        }
    });
}

function initSizeChange () {
    const emitSize = () => {
        event.emit(EVENT.SIZE_CHANGE, getScreenSize());
    };
    let flag = false;
    window.addEventListener('resize', () => {
        if (flag)  return;
        flag = true;
        // 简易的事件截流
        setTimeout(() => {
            // 设置50ms后获取宽高是因为在某些ios设备上马上获取或获取不到最新的宽高
            setTimeout(emitSize, 30);
            flag = false;
        }, 30);
    });

    emitSize();
}