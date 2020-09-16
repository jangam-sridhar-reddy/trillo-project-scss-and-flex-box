const path = require("path");
const common = require("./webpack.common");
const {merge} = require("webpack-merge");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = merge(common, {
    mode : "production",
    output : {
        filename : "main.[contentHash].bundle.js",
        path : path.resolve(__dirname, "docs")
    },
    module : {
        rules : [
            {
                test : /\.scss$/,
                use : [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    },
    plugins : [ 
        new MiniCssExtractPlugin(
            {filename: 'styles/main.[contenthash].css',}
        ),
        new CleanWebpackPlugin()
    ]
});