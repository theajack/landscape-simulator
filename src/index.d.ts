/*
 * @Author: tackchen
 * @Date: 2022-03-27 13:05:40
 * @LastEditors: tackchen
 * @LastEditTime: 2022-03-27 23:43:25
 * @FilePath: /landscape-simulator/src/index.d.ts
 * @Description: Coding something
 */

import {IConfigOption, ISize} from './types/utils';

interface ILandscapeSimulator {
    init(option?: IConfigOption): void;
    appendChild(dom: HTMLElement): void;
    getSimulateSize(): ISize;
    isSimulateLandscape(): boolean;
    onSimulateChange(callback: (bool: boolean) => void): void;
}

declare const LandscapeSimulator: ILandscapeSimulator;

export default LandscapeSimulator;