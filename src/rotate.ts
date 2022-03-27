/*
 * @Author: tackchen
 * @Date: 2022-03-27 14:01:11
 * @LastEditors: tackchen
 * @LastEditTime: 2022-03-27 23:22:26
 * @FilePath: /landscape-simulator/src/rotate.ts
 * @Description: Coding something
 */
import event from 'tc-event';
import {EVENT} from './constant';
import {Orientation} from './event';
import {ISize} from './types/utils';
// import {getScreenSize} from './util';

let container: HTMLElement;

export function getContainer () {
    if (container) return container;
    return initRotater();
}

export function initRotater (): HTMLElement {
    if (container) return container;

    container = document.createElement('div');
    container.setAttribute('id', 'RotateContainer');

    window.addEventListener('load', () => {
        const body = document.body;
        body.setAttribute('style', 'margin: 0;overflow: visible;');
        container.setAttribute('style', 'overflow: auto');
        const children = body.childNodes;

        let index = 0;
        for (let length = children.length, i = 0; i < length; i++) {
            const child = children[index];
            if (child.nodeType === 3) {
                container.append(child);
            } else {
                if (child.nodeName === 'SCRIPT' || child.nodeName === 'style') {
                    index ++;
                    continue;
                }
                container.appendChild(child);
            }
        }
        body.appendChild(container);

        initEventListener();
    }, true);


    return container;
}

function initEventListener () {
    event.regist(EVENT.SIZE_CHANGE, (size: ISize) => {
        reinitContainer(size);
    });
}

function reinitContainer (size: ISize) {
    if (!Orientation.isLandscape) {
        setContainerSize(size);
    } else {
        resetContainer(size);
    }
    if (Orientation.lastLandscape !== Orientation.isLandscape) {
        Orientation.lastLandscape = Orientation.isLandscape;
        event.emit(EVENT.SIMULATE_CHANGE, !Orientation.isLandscape);
    }
}

function setContainerSize (size: ISize) {
    getContainer().style.width = `${size.height}px`;
    getContainer().style.height = `${size.width}px`;
    document.body.style.width = '';
    document.body.style.transform = 'rotate(90deg)';
    const min = Math.min(size.height, size.width);
    const origin = min / 2;
    document.body.style.transformOrigin = `${origin}px ${origin}px`;

    // ! 使上一次重绘完成之后才设置body尺寸
    setTimeout(() => {
        document.body.style.width = `${size.height}px`;
        document.body.style.height = `${size.width}px`;
    }, 10);
}

function resetContainer (size: ISize) {
    getContainer().style.width = `${size.width}px`;
    getContainer().style.height = `${size.height}px`;
    document.body.style.width = `${size.width}px`;
    document.body.style.height = `${size.height}px`;
    document.body.style.transform = 'rotate(0deg)';
    document.body.style.transformOrigin = '';
}