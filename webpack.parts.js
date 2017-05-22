const ExtractTextPlugin = require('extract-text-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const cssnano = require('cssnano');
const CleanWebpackPlugin = require('clean-webpack-plugin');

// Webpack Dev server configuration
exports.devServer = ({ host, port } = {}) => ({

    devServer: {
        historyApiFallback: true,
        stats: 'errors-only',
        host, // Defaults to `localhost`
        port, // Defaults to 8080
        overlay: {
            errors: true,
            warnings: true,
        },
        watchOptions: {
            ignored: /node_modules/
        }
    }

});

// HTML loader
exports.loadHTML = ({ options }) => ({

    module: {
        rules: [
            {
                test: /\.html$/,
                loader: 'html-loader',
                options
            }
        ]
    }

});

// Javascript linter
exports.lintJS = ({ include, exclude, options }) => ({

    module: {
        rules: [
            {
                test: /\.js$/,
                include,
                exclude,
                enforce: 'pre',
                loader: 'eslint-loader',
                options
            }
        ]
    }

});

// Minifying Javascript
exports.UglifyJS = () => {

    var plugin = new UglifyJSPlugin();

    return {
        plugins: [ plugin ]
    };

};

// Loads CSS files
exports.loadCSS = ({ include, exclude } = {}) => ({

    module: {
        rules: [
            {
                test: /\.css$/,
                include,
                exclude,
                use: ['style-loader', 'css-loader']
                // use: [
                //     { loader: 'style-loader' },
                //     {
                //         loader: 'css-loader',
                //         options: {
                //             modules: true
                //         }
                //     }
                // ]
            }
        ]
    }

});

// Loads CSS and aggregate it into a single file
exports.extractCSS = ({ include, exclude, use }) => {

    // Output extracted CSS to a file
    const plugin = new ExtractTextPlugin({
        filename: 'css/style.css',
    });

    return {
        module: {
            rules: [
                {
                    test: /\.css$/,
                    include,
                    exclude,
                    use: ExtractTextPlugin.extract({
                        use,
                        fallback: 'style-loader'
                    })
                }
            ]
        },
        plugins: [ plugin ]
    };

};

// CSS linter
exports.lintCSS = ({ files }) => {
    const plugin = new StyleLintPlugin({
        files,
        quiet: false
    });

    return {
        plugins: [ plugin ]
    };
};

// Adds CSS prefixes according to browserslist
exports.autoprefix = () => ({
    loader: 'postcss-loader',
    options: {
        plugins: () => ([
            require('autoprefixer')()
        ])
    }
});

// Minifying CSS
exports.minifyCSS = ({ options }) => ({
    plugins: [
        new OptimizeCSSAssetsPlugin({
            cssProcessor: cssnano,
            cssProcessorOptions: options,
            canPrint: false
        })
    ]
});

// Cleaning up the build directory
exports.clean = (path) => ({
    plugins: [
        new CleanWebpackPlugin([path])
    ]
});

// Loading images
exports.loadImages = ({include, exclude, options} = {}) => ({

    module: {
        rules: [
            {
                test: /\.(png|jpg|svg)$/,
                include,
                exclude,
                use: [
                    {
                        loader: 'url-loader',
                        options,
                    }
                ]
            }
        ]
    }

});
