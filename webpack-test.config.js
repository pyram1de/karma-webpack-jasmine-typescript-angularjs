var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
    resolve: {
        extensions: ['.ts', '.js']
    },
    devtool: 'source-map-inline',
    module: {
        rules: [
        {
            test: /\.tsx?$/,
            exclude: /node_modules/,
            use: [
                'babel-loader',
                'ts-loader'
            ]
        }]
    },
    optimization: {
        minimize: false,
    },
    devServer: {}
}