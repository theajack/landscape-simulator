/*
 * @Author: tackchen
 * @Date: 2022-03-27 14:28:22
 * @LastEditors: tackchen
 * @LastEditTime: 2022-03-27 22:28:00
 * @FilePath: /landscape-simulator/src/config.ts
 * @Description: Coding something
 */

import {IConfig, IConfigOption} from './types/utils';

export const config: IConfig = {
    disablePc: true,
};

export function initConfig (userConfig: IConfigOption) {
    Object.assign(config, userConfig);
}