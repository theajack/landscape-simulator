const path = require('path');
const config = require('./config');

module.exports = {
    mode: 'development',
    entry: config.entry,
    output: {
        path: path.resolve('./', 'public/main.ts'),
        filename: 'bundle.js'
    },
    resolve: config.resolve,
    devtool: 'eval-source-map',
    devServer: {
        contentBase: path.resolve('./', 'public'),
        historyApiFallback: true,
        inline: true,
        host: 'localhost',
        disableHostCheck: true,
        proxy: {
        },
    },
    module: config.module
};