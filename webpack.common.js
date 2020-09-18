const HtmlWebpackPlugin = require('html-webpack-plugin');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');
const path = require("path");

module.exports = {
    entry : "./src/assets/srcipts/app.js",
    module : {
        rules : [
            {
                test : /\.html$/,
                loader: 'html-loader',
            },
            {
                test : /\.(png|jpg|jpeg|gif)$/,
                use : {
                    loader : "file-loader",
                    options : {
                        name : "[name].[hash].[ext]",
                        outputPath : "images"

                    }
                }

            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use:{
                    loader: "babel-loader"
                }
            
            },
            {
                test : /\.svg/i,
                include: /.*sprite\.svg/,
                exclude: {
                    or: [
                        path.resolve(__dirname, './src/assets/public/fonts')
                    ]
                },
                use: [
                    {
                        loader: 'svg-sprite-loader',
                        options: { 
                            publicPath: '',
                        }
                    },
                ],
            },
            {
                test: /\.(woff|woff2|eot|ttf|svg)$/,
                include: [path.resolve(__dirname, './src/assets/public/fonts')],
                exclude: /.*sprite\.svg/,
                loader: 'url-loader?limit=100000',
            }
        ]
    },
    plugins : [
        new HtmlWebpackPlugin(
            {template : "./src/index.html"}
        ),
        new SpriteLoaderPlugin()
    ]
}