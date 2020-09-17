const HtmlWebpackPlugin = require('html-webpack-plugin');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');

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
                use: [
                    {
                        loader: 'svg-sprite-loader',
                        options: {
                            publicPath: '',
                        }
                    },
                ],
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