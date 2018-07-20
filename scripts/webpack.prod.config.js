const webpack = require('webpack');
const merge = require('webpack-merge');
const config = require('./webpack.config.js');
const CleanWebpackPlugin = require('clean-webpack-plugin');


module.exports = merge(config,{
	plugins: [
		new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"production"'
        }),
		new webpack.optimize.UglifyJsPlugin({
			compress: {
		        warnings: false
		    },
		    output: {
		        comments: false
		    }
		}),
		new CleanWebpackPlugin(['../public/dist'])
	]
})
