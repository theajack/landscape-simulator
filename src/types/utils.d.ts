/*
 * @Author: tackchen
 * @Date: 2022-03-27 13:07:02
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-06-05 11:23:46
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