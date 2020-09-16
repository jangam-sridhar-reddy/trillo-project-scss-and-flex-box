const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry : "./src/assets/srcipts/app.js",
    module : {
        rules : [
            {
                test : /\.html$/,
                loader: 'html-loader',
            },
            {
                test : /\.(png|jpg|jpeg|svg|gif)$/,
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
            
            }
        ]
    },
    plugins : [
        new HtmlWebpackPlugin(
            {template : "./src/index.html"}
        )
    ]
}