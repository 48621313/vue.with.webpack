import ConsoleLogOnBuildWebpackPlugin from './plugins/ConsoleLogOnBuildWebpackPlugin.js'
module.exports = {
    // 目标环境
    target: false,
    entry: {
        main: '../src/main.js',
        vendor: '../src/vendor.js',
    },
    rules: [
        { test: '/\.css$/', use: 'css-loader' },
        { test: '/\.ts$/', use: 'ts-loader' },
    ],
    plugins: [
        new ConsoleLogOnBuildWebpackPlugin()
    ],
    // 解析
    resolve: {},
    resolveLoader: {},
}