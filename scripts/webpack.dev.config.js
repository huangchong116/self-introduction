const webpack = require('webpack');
const merge = require('webpack-merge');
const config = require('./webpack.config.js');


module.exports = merge(config,{
	devtool: 'eval',
	devServer: {
		historyApiFallback: true,
		host: 'localhost',
		open: true,
		hot: true,
		inline: true
	},
	plugins: [
		new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"development"'
        }),
		new webpack.HotModuleReplacementPlugin()
	]
})