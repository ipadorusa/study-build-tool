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
		path: path.resolve(__dirname, 'dist'),
		filename: 'app.bundle.js',
		libraryTarget: 'var',
		library: 'EntryPoint'
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
	devServer: {
		publicPath: "/dist/",
		compress: true,
		port: 9000
	},
	plugins: [
		new CleanWebpackPlugin([
			'dist'
		], cleanOptions)
	]
}
