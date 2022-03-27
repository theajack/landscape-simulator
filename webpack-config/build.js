const path = require('path');
const config = require('./config');


module.exports = () => {

    return {
        mode: 'production',
        entry: path.resolve('./', 'src/index.ts'),
        output: {
            path: path.resolve('./', 'npm'),
            filename: 'landscape-simulator.min.js',
            library: 'landscapeSimulator',
            libraryTarget: 'umd',
            libraryExport: 'default',
        },
        resolve: config.resolve,
        externals: {},
        module: config.module,
    };
};