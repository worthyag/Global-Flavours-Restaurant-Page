const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    entry: {
        index: path.resolve(__dirname, 'src/index.js'),
        menu: path.resolve(__dirname, 'src/menu.js'),
        contact: path.resolve(__dirname, 'src/contact.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        clean: true,
        assetModuleFilename: '[name][ext]'
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist')
        },
        port: 3000,
        open: true,
        hot: true,
        compress: true,
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Global Flavour',
            filename: 'index.html',
            template: './src/about.html',
            inject: true,
            chunks: ['index']
        }),
        new HtmlWebpackPlugin({
            title: 'Global Flavour',
            filename: 'menu.html',
            template: './src/menu.html',
            inject: true,
            chunks: ['menu']
        }),
        new HtmlWebpackPlugin({
            title: 'Global Flavour',
            filename: 'contact.html',
            template: './src/contact.html',
            inject: true,
            chunks: ['contact']
        })
    ],
    stats: {
        children: true
    }
}