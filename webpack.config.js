const webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    output: {
        path: 'build',
        filename: 'bundle.js'
    }, // output
    devServer: {
        inline: true,
        contentBase: './build',
        port: 3000
    }, // devServer
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015']
                }
            }, // babel loader
            {
                test: /\.scss$/,
                loader: 'style-loader!css-loader!sass-loader'
            }, // scss loader
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=10000'
            } // url loader
        ] // loaders
    } // module
}; // exports
