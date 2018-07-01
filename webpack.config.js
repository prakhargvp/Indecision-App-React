// entry -> output
const path = require('path');

module.exports = {
	entry: './src/app.js',
	output: {
		path: path.join(__dirname, 'public'),
		filename: 'bundle.js'
	},
	module : {
		// loader
		// When webpack got .js or .... file then it will do .....
		rules: [{
			loader: 'babel-loader',
			test: /\.js$/,	// regular expression
			exclude: /node_modules/
		},
		{
			test: /\.css$/,	// regular expression
			use: [
				'style-loader',
				'css-loader'
			]
		}]
	},
	devtool: 'cheap-module-eval-source-map',
	devServer: {
		contentBase: path.join(__dirname, 'public')
	}
};





