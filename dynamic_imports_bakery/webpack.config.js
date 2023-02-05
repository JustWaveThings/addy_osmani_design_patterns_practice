const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: '/src/bakery.mjs',
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Dynamic Imports Bakery',
		}),
	],
	output: {
		filename: 'bakery.mjs',
		path: path.resolve(__dirname, 'dist'),
	},
};
