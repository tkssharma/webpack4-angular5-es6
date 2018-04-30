const path = require('path');
module.exports = {
    // mode: 'production',
    mode: 'development',
    devServer: {
        historyApiFallback: true,//不跳转
        inline: true,//实时刷新
        // clientLogLevel: 'warning',
        // hot: true,
        // compress: true,
        host: 'localhost',
        port: 8080,
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
        ]
    },
  };