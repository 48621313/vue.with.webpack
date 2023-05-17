const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    mode: 'development',
    // 实验
    entry: {
        index: './src/index.js',
    },
    output: {
        filename: '[name].bundle.x.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    plugins: [new HtmlWebpackPlugin({ title: 'xxx' })],
    module: {
        rules: [
            { test: /\.css$/i, use: ["style-loader", "css-loader"] },
            { test: /\.(png|svg|jpg|jpeg|git)$/i, type: 'asset/resource' },
            { test: /\.(woff|woff2|eot|ttf|otf)$/i, type: 'asset/resource', },
            { test: /\.ts$/i, use: 'ts-loader' },
        ],
    },
    devtool: 'inline-source-map',
    devServer: {
        static: './list'
    },
    optimization: {
        runtimeChunk: 'single'
    }
}