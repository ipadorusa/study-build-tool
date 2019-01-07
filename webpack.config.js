const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const cleanOptions = {
	root: '',
	exclude: [''],
	verbose: true,
	dry: false
}

module.exports = {
	entry: ['@babel/polyfill', './src/app.js'],
	output: {
		filename: 'app.js',
		path: path.resolve(__dirname, 'dist')
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					'style-loader',
					{
						loader: MiniCssExtractPlugin.loader
					},
					{
						loader: 'css-loader',
						options: { importLoaders: 1 }
					}

				]
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: [
					'file-loader',
				],
			},
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env']
					}
				}
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: 'html-loader'
					}
				]
			}
		]
	},
	resolve: {
		extensions: ['*', '.js', '.json', '.jsx', '.css']
	},
	plugins: [
		new CleanWebpackPlugin([
			'dist'
		], cleanOptions),
		new HtmlWebpackPlugin({
			template: "./index.html",
			filename: "./index.html"
		}),
		new MiniCssExtractPlugin({
			// Options similar to the same options in webpackOptions.output
			// both options are optional
			filename: "[name].css",
			chunkFilename: "[id].css"
		})
	]
}
