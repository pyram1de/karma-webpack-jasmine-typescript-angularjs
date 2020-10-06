var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
    entry: './src/main.ts',
    resolve: {
        extensions: ['.ts', '.js']
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: "[name].js",
    },
    module: {
        rules: [{
            test: /\.tsx?$/,
            loader: 'ts-loader',
        }]
    },
    plugins: [new HtmlWebpackPlugin({
        filename: "index.html",
        template: "./src/index.html"
    })],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000
    }
}