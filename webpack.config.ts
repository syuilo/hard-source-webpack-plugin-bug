/**
 * webpack configuration
 */

const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');

module.exports = {
	entry: './script.ts',
	module: {
		rules: [{
			test: /\.vue$/,
			loader: 'vue-loader'
		}, {
			test: /\.ts$/,
			use: [{
				loader: 'ts-loader',
				options: {
					appendTsSuffixTo: [/\.vue$/]
				}
			}]
		}]
	},
	plugins: [new HardSourceWebpackPlugin()],
	output: {
		filename: 'script.js'
	}
};
