const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
	entry: {
		app: path.join(__dirname,'../src/index.js'),
		vendor: ['react','react-dom','react-router','react-router-dom','antd']
	},
	output: {
		path: path.join(__dirname,'../public/dist'),
		filename: 'js/[name].[hash:6].js',
		chunkFilename: 'js/[name].chunk.js',
	},
	resolve: {
		alias: {
			components: path.join(__dirname,'../src/components'),
			container: path.join(__dirname,'../src/container'),
			router: path.join(__dirname,'../src/router'),
		}
	},
	module: {
		rules: [
            {
                test: /\.(js|jsx)?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.css/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            },
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ['css-loader', 'less-loader']
                })
            }
        ]
	},
	plugins: [
		new ExtractTextPlugin('css/style[hash:6].css')
	]
}