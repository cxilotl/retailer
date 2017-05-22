const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');

const parts = require('./webpack.parts');

// Plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');

const APP_PATHS = {
    SRC_DIR     : path.join(__dirname, 'src'),
    BUILD_DIR   : path.join(__dirname, 'build')
};

const commonConfig = merge([

    {
        context: path.join(__dirname),

        entry: APP_PATHS.SRC_DIR + '/index.js',

        output: {
            path    : APP_PATHS.BUILD_DIR,
            filename: 'index.js'
        },

        resolve: {
            modules: ["node_modules"]
        },

        plugins: [
            new HtmlWebpackPlugin({
                title: 'Clothing Retailer',
                filename: 'index.html',
                template: APP_PATHS.SRC_DIR + '/templates/' + 'index.html'
            })
        ]
    },

    parts.lintJS({
        include: APP_PATHS.SRC_DIR,
        exclude: /node_modules/,
        options: {
            emitWarning: true,
            failOnError: true
        }
    }),

    parts.lintCSS({
        files: 'src/**/*.css'
    })

]);


const prodConfig = merge([

    parts.clean( APP_PATHS.BUILD_DIR ),

    parts.extractCSS({
        exclude: /node_modules/,
        use: ['css-loader', parts.autoprefix()]
    }),

    parts.loadHTML({
        options : {
            minimize: true
        }
    }),

    parts.loadImages({
        options: {
            limit: 15000,
            name: '[name].[ext]'
        }
    }),

    parts.minifyCSS({
        options: {
            safe: true,
            discardComments: {
                removeAll: true
            }
        }
    }),

    parts.UglifyJS()

]);


const devConfig = merge([

    parts.devServer({
        // Customize host/port here if needed
        host: process.env.HOST,
        port: process.env.PORT,
    }),

    parts.loadHTML({
        include: APP_PATHS.SRC_DIR,
        options : {
            minimize: false
        }
    }),

    parts.loadImages({
        // include: APP_PATHS.SRC_DIR,
    }),

    parts.loadCSS({
        include: [
            APP_PATHS.SRC_DIR,
            /node_modules\/bootstrap\/dist\/css\/bootstrap/
        ],
        exclude: /node_modules/,
    }),

]);


module.exports = (env) => {
    let config;
    console.log('Env: ', env);
    if (env === 'production') {
        config = merge(commonConfig, prodConfig);
    } else {
        config = merge(commonConfig, devConfig);
    }
    return config;
};
