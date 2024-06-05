/*
 * @Author: tackchen
 * @Date: 2022-03-27 14:28:22
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-06-05 11:18:21
 * @FilePath: /landscape-simulator/src/config.ts
 * @Description: Coding something
 */

import {IConfig, IConfigOption} from './types/utils';

export const config: IConfig = {
    disablePc: true,
    // @ts-ignore
    container: undefined,
};

export function initConfig (userConfig: IConfigOption) {
    Object.assign(config, userConfig);
}