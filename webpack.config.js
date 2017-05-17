let debug = process.env.NODE_ENV !== 'production';

const webpack = require('webpack');
const path = require('path');

// Plugins
const StyleLintPlugin = require('stylelint-webpack-plugin');

// const DIST_DIR = path.join(__dirname, 'dist');
// const CLIENT_DIR = path.join(__dirname, 'src');

const APP_PATHS = {
    SRC_DIR     : path.join(__dirname, 'src'),
    BUILD_DIR   : path.join(__dirname, 'dist')
};

const config = {
    context: path.join(__dirname),

    devtool: debug ? 'inline-sourcemap' : null,

    entry: APP_PATHS.SRC_DIR + '/index.js',

    output: {
        path    : APP_PATHS.BUILD_DIR,
        filename: 'bundle.js'
    },

    resolve: {
        modules: ["node_modules"]
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                enforce: 'pre',
                loader: 'eslint-loader',
                options: {
                    emitWarning: true,
                    failOnError: true
                }
            },
            // {
            //     test: /\.css$/,
            //     include: /src/,
            //     exclude: /node_modules/,
            //     enforce: 'pre',
            //     loader: 'postcss-loader',
            //     options: {
            //         plugins: () => ([
            //             require('stylelint')()
            //         ])
            //     }
            // },
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    {
                        loader: 'css-loader',
                        // options: {
                        //     modules: true
                        // }
                    }
                ]
            }
        ]
    },


    plugins: [
        new StyleLintPlugin({
            files: 'src/**/*.css',
            quiet: false
        })
    ]

};

module.exports = config;