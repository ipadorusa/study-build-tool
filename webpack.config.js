const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

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
		library: 'lib',
		path: path.resolve(__dirname, 'dist')
	},
	module: {
		rules: [
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
		], cleanOptions)
	]
}