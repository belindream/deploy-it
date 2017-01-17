var path = require('path')
var webpack = require('webpack')

module.exports = {
	devtool: 'eval-source-map',
	entry: {
		app: ['webpack-hot-middleware/client', './app/main/main']
	},
	output: {
		path: path.join(__dirname, '../dist'),
		filename: 'app.js',
		publicPath: '/dist/'
	}
  ,	plugins: [
		new webpack.HotModuleReplacementPlugin()
	  ,	new webpack.NoErrorsPlugin()
	  , new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js')
	],
    resolve: {
		extensions: ['', '.js', '.jsx']
    },
	module: {
		loaders: [
			{
				test: /\.(js|jsx)$/,
				loaders: ['babel'],
				include: [path.join(__dirname, '../main'), path.join(__dirname, '../lib')]
			}
		  , {
				test: /\.scss$/,
				loaders: ["style-loader", "css-loader", "sass-loader"]
			}
		  , {
				test: /\.(jpe?g|png|gif|svg)$/i,
				loaders: [
					'file?hash=sha512&digest=hex&name=[hash].[ext]',
					'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
				]
			}
		]
	}
}
