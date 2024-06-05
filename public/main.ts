/*
 * @Author: tackchen
 * @Date: 2022-03-27 12:03:42
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-06-05 11:34:14
 * @FilePath: /landscape-simulator/public/main.ts
 * @Description: Coding something
 */
import LandscapeSimulator from '../src/index';
// import LandscapeSimulator from '../npm/index';

(window as any).LandscapeSimulator = LandscapeSimulator;

LandscapeSimulator.init().then((bool) => {
    // console.log(LandscapeSimulator.getSimulateSize());
    // console.warn(`Success: ${bool}`);
});

LandscapeSimulator.onSimulateChange((bool) => {
    // console.warn(`onSimulateChange: ${bool}`);
});


