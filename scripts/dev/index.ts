/*
 * @Author: tackchen
 * @Date: 2022-08-03 20:32:39
 * @Description: Coding something
 */
// import LandscapeSimulator from '../../src/index';
import LandscapeSimulator from '../../npm';

(window as any).LandscapeSimulator = LandscapeSimulator;

LandscapeSimulator.init().then((bool) => {
    // console.log(LandscapeSimulator.getSimulateSize());
    // console.warn(`Success: ${bool}`);
});

LandscapeSimulator.onSimulateChange((bool) => {
    // console.warn(`onSimulateChange: ${bool}`);
});

