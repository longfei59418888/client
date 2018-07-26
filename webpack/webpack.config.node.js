var config = require('./config')
var port = config.PROD_PORT,
    HtmlWebpackPlugin = require("html-webpack-plugin"),
    merge = require('webpack-merge'),
    webpackConfigBase = require('./webpack.config.base.js'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    webpack = require("webpack"),
    path = require('path');


var prodConfig = {
    target: 'node',
    devtool: false,
    entry: {
        app: './src/containers/index.js'

    },
    output: {
        filename: 'server.js',
        path: path.resolve(__dirname, "../dist/client"),
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'isomorphic-style-loader'
                    }, {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1
                        }
                    }
                ]
            }, {
                test: /^.((?!module).)*\.scss$/,
                use: [
                    {
                        loader: 'isomorphic-style-loader',
                        options: {
                            importLoaders: 1
                        }
                    }, {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1
                        }
                    }, {
                        loader: "sass-loader"
                    }
                ]
            }, {
                test: /\.module\.scss$/,
                use: [
                    {
                        loader: 'isomorphic-style-loader',
                        options: {
                            modules: true,
                            importLoaders: 1,
                            localIdentName: '[name]-[local]-[hash:base64:5]'
                        }
                    }, {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            importLoaders: 1
                        }
                    }, {
                        loader: "sass-loader"
                    }
                ]
            }
        ]
    },
    plugins: [ // 定义环境变量为开发环境
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production'),
            'DEVELOPMETN_URL': JSON.stringify('http://127.0.0.1:8081/')
        }),

    ]
};

module.exports = merge(webpackConfigBase, prodConfig);