var config = require('./config')
var port = config.PROD_PORT,
    HtmlWebpackPlugin = require("html-webpack-plugin"),
    merge = require('webpack-merge'),
    webpackConfigBase = require('./webpack.config.base.js'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    webpack = require("webpack"),
    path = require('path');


var prodConfig = {
    entry: {
        app: './src/containers/index.js'

    },
    output: {
        publicPath: '/public',
        filename: 'js/server.js',
        path: path.resolve(__dirname, "../dist/server"),
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
    // output: {
    //   path: path.join(__dirname, './dist'),
    //   chunkFilename: '[name].js'
    // },
    plugins: [ // 定义环境变量为开发环境
        // new ExtractTextPlugin('css/[name].css'),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production'),
            IS_DEVELOPMETN: false
        }),
        // new HtmlWebpackPlugin({
        //     filename: 'index.html',
        //     template: 'src/index.html'
        // }),
        // // 提取css 根据入口文件，提取重复引用的公共代码类库，打包到单独文件中 new webpack   .optimize
        // new webpack
        //     .optimize
        //     .CommonsChunkPlugin({async: true, minChunks: 3})
    ]
};

module.exports = merge(webpackConfigBase, prodConfig);