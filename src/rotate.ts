/*
 * @Author: tackchen
 * @Date: 2022-03-27 14:01:11
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-06-05 11:36:15
 * @FilePath: /landscape-simulator/src/rotate.ts
 * @Description: Coding something
 */
import event from 'tc-event';
import {EVENT} from './constant';
import {Orientation} from './event';
import {ISize} from './types/utils';
// import {getScreenSize} from './util';

let container: HTMLElement;
let innerContainer: HTMLElement;

export function getContainer () {
    if (innerContainer) return innerContainer;
    return initRotate();
}
export function getInnerContainer () {
    if (innerContainer) return innerContainer;
    return initRotate();
}

export function initRotate (): HTMLElement {
    if (innerContainer) return innerContainer;

    innerContainer = document.createElement('div');
    innerContainer.setAttribute('id', 'InnerContainer');

    window.addEventListener('DOMContentLoaded', () => {

        container = document.createElement('div');
        container.setAttribute('id', 'Container');
        container.setAttribute('style', 'margin: 0;overflow: visible;background-color: inherit;');

        innerContainer.setAttribute('style', 'overflow: auto');
        const children = document.body.childNodes;

        let index = 0;
        for (let length = children.length, i = 0; i < length; i++) {
            const child = children[index];
            if (child.nodeType === 3) {
                innerContainer.append(child);
            } else {
                if (
                    child.nodeName === 'SCRIPT' || child.nodeName === 'style' ||
                    (child as HTMLElement).hasAttribute('ignore-simulate')
                ) {
                    index ++;
                    continue;
                }
                innerContainer.appendChild(child);
            }
        }
        container.appendChild(innerContainer);
        document.body.style.margin = '0';
        document.body.appendChild(container);
        initEventListener();
    }, true);


    return innerContainer;
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
    getInnerContainer().style.width = `${size.height}px`;
    getInnerContainer().style.height = `${size.width}px`;
    container.style.width = '';
    container.style.transform = 'rotate(90deg)';
    const min = Math.min(size.height, size.width);
    const origin = min / 2;
    container.style.transformOrigin = `${origin}px ${origin}px`;

    // ! 使上一次重绘完成之后才设置body尺寸
    setTimeout(() => {
        container.style.width = `${size.height}px`;
        container.style.height = `${size.width}px`;
    }, 10);
}

function resetContainer (size: ISize) {
    getInnerContainer().style.width = `${size.width}px`;
    getInnerContainer().style.height = `${size.height}px`;
    container.style.width = `${size.width}px`;
    container.style.height = `${size.height}px`;
    container.style.transform = 'rotate(0deg)';
    container.style.transformOrigin = '';
}