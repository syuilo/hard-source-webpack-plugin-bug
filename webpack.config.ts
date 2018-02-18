/**
 * webpack configuration
 */

const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');

module.exports = {
	entry: {
		desktop: './script.ts',
	},
	module: {
		rules: [{
			test: /\.vue$/,
			exclude: /node_modules/,
			loader: 'vue-loader'
		}, {
			test: /\.ts$/,
			exclude: /node_modules/,
			use: [{
				loader: 'ts-loader',
				options: {
					configFile: __dirname + '/tsconfig.json',
					appendTsSuffixTo: [/\.vue$/]
				}
			}]
		}]
	},
	plugins: [new HardSourceWebpackPlugin()],
	output: {
		path: __dirname,
		filename: 'script.js'
	},
	resolve: {
		extensions: [
			'.js', '.ts'
		]
	},
	resolveLoader: {
		modules: ['node_modules', './webpack/loaders']
	}
};