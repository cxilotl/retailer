let debug = process.env.NODE_ENV !== "production";

const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const DIST_DIR = path.join(__dirname, "dist");
const CLIENT_DIR = path.join(__dirname, "src");

const config = {
    context: path.join(__dirname),

    devtool: debug ? "inline-sourcemap" : null,

    // entry: "./js/scripts.js",
    // entry: './src/index.js',
    entry: CLIENT_DIR + '/index.js',

    output: {
        // path: __dirname + "/src/js",
        // path    : path.resolve(__dirname, 'dist'),
        path    : DIST_DIR,
        filename: "bundle.js"
    },

    // resolve: {
    //     extensions: ['', '.js', '.es']
    // }

    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true
                        }
                    }
                ]
            }
            // { use: 'babel-loader' }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'template.html'
        })
    ]

    // plugins: debug ? [] : [
    //     new webpack.optimize.DedupePlugin(),
    //     new webpack.optimize.OccurenceOrderPlugin(),
    //     new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
    // ]

};

module.exports = config;