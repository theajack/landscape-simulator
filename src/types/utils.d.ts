/*
 * @Author: tackchen
 * @Date: 2022-03-27 13:07:02
 * @LastEditors: tackchen
 * @LastEditTime: 2022-03-27 22:55:05
 * @FilePath: /landscape-simulator/src/types/utils.d.ts
 * @Description: Coding something
 */

export interface ISize {
    width: number;
    height: number;
}

export interface IConfig {
    disablePc: boolean;
}

export type IConfigOption = {
    [K in keyof IConfig]?: IConfig[K];
}