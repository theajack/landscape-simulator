/*
 * @Author: tackchen
 * @Date: 2022-03-27 23:50:31
 * @LastEditors: tackchen
 * @LastEditTime: 2022-03-27 23:53:26
 * @FilePath: /landscape-simulator/webpack-config/build-prod-common.js
 * @Description: Coding something
 */
const path = require('path');
const config = require('./config');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = (cdn = false) => {
    const externals = cdn ? {} : {'tc-event': 'tc-event'};
    const output = {
        path: path.resolve('./', 'npm'),
        libraryTarget: 'umd',
        libraryExport: 'default',
    };
    if (cdn) {
        output.filename = 'landscape-simulator.min.js';
        output.library = 'LandscapeSimulator';
    } else {
        output.filename = 'index.js';
    }
    return {
        mode: 'production',
        entry: path.resolve('./', 'src/index.ts'),
        output,
        resolve: config.resolve,
        externals,
        module: config.module,
        plugins: [
            new CopyWebpackPlugin({
                patterns: [
                    {from: 'src/index.d.ts'},
                    {
                        from: 'src/types/**/*',
                        transformPath (targetPath) {
                            return targetPath.replace('src/', '');
                        },
                    },
                    {from: 'LICENSE'}
                ]
            }),
        ]
    };
};