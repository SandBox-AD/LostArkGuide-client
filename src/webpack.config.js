const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")
const Dotenv = require('dotenv-webpack');

const port = process.env.PORT || 3000;
import './../env/env';
module.exports = {
    // Webpack configuration goes here
    mode: 'development',
    entry: './index.js',
    output: {
        filename: 'bundle.[hash].js',
        path: __dirname + '/public',
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            // First Rule
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            // Second Rule
            {
                test: /\.css$/,
                use: [{
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            localsConvention: 'camelCase',
                            sourceMap: true
                        }
                    }
                ]
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    {
                        loader: "sass-loader",
                        options: {
                            // Prefer `dart-sass`
                            implementation: require("sass"),
                        },
                    },
                ],
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                // include: path.resolve(__dirname, './node_modules/bootstrap-icons/font/fonts'),
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'webfonts',
                        publicPath: '../webfonts',
                    },
                }
            },
            {
                test: /\.(svg|eot|woff|woff2|ttf)$/,
                type: 'asset/resource',
                generator: {
                  publicPath: '../webfonts',
                  filename: 'compiled/fonts/[hash][ext][query]'
                }
             }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'public/index.html',
            favicon: 'public/favicon.ico'
        }),
        new NodePolyfillPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production'),
            },
        }),
        new Dotenv({
            path: '.env.local',
        }),
    ],
    target: 'node',
    resolve: {
        // ... rest of the resolve config
        fallback: {
            "path": false,
            "os": false,
        }
    },
    node: {
        fs: 'empty'
    },
};