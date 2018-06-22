const path = require('path');
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const config = require('./webpack.config.js');


module.exports = merge(config,{
	devtool: 'eval',
	devServer: {
		historyApiFallback: true,
		host: '0.0.0.0',
		open: true,
	},
	plugins: [
		new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"development"'
        }),
		new htmlWebpackPlugin({
			template: path.resolve(__dirname,'../index.html'),
		})
	]
})