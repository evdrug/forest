
const webpack = require('webpack'),
    UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const PATHS = {
    source: path.join(__dirname, 'src/scripts'),
    build: path.join(__dirname, 'dst/js'),
};

const config = {
    output: {
        filename: 'bundle.js'
    },
    plugins: [
        new UglifyJSPlugin({
            sourceMap: true
        })
    ]
};

module.exports = config;