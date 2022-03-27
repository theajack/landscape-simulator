/*
 * @Author: tackchen
 * @Date: 2022-03-27 14:15:11
 * @LastEditors: tackchen
 * @LastEditTime: 2022-03-27 15:00:00
 * @FilePath: /landscape-simulator/src/util.ts
 * @Description: Coding something
 */

import {ISize} from './types/utils';

export const isMobile = () => /(iphone|ipad|ipod|ios|android)/i.test(navigator.userAgent.toLowerCase());

export function getScreenSize (): ISize {
    return {
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight
    };
}