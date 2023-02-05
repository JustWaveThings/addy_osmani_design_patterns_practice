const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: {
		bakery: '/src/bakery.mjs',
		cakeFactory: '/src/cakeFactory.mjs',
		staff: '/src/staff.mjs',
	},
	devtool: 'inline-source-map',
	devServer: {
		static: './dist',
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Dynamic Imports Bakery',
		}),
	],
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist'),
		clean: true,
	},
	optimization: {
		runtimeChunk: 'single',
	},
};
