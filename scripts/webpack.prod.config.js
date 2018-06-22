const path = require('path');
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const config = require('./webpack.config.js');
const CleanWebpackPlugin = require('clean-webpack-plugin');


module.exports = merge(config,{
	plugins: [
		new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"production"'
        }),
		new htmlWebpackPlugin({
			template: path.resolve(__dirname,'../index.html')
		}),
		new webpack.optimize.UglifyJsPlugin({
			compress: {
		        warnings: false
		    },
		    output: {
		        comments: false
		    }
		}),
		new CleanWebpackPlugin(['public/dist'])
	]
})
