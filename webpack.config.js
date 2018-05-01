const path = require('path');
module.exports = {
    // mode: 'production',
    mode: 'development',
    devServer: {
        historyApiFallback: true,//不跳转
        inline: true,//实时刷新
        clientLogLevel: 'none',
        // hot: true,
        // compress: true,
        host: 'localhost',
        port: 8886,
        publicPath: '/dist/',
        watchContentBase: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {loader: "babel-loader"},
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                use: [
                    {loader: 'style-loader'},
                    {loader: 'css-loader'},
                    {loader: 'sass-loader'}
                ]
            },
            {
                test: /\.html$/,
                use: {loader: 'html-loader'}
            }
        ]
    },
  };