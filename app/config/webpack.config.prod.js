var path = require('path')
var webpack = require('webpack')

module.exports = {
	devtool: 'source-map'
  , entry: {
		main: './main/main.js'
  	  , vendors: [
  	  		'moment'
  	  	  // , 'history'
  	  	  // , 'material-ui'
  	  	  , 'ramda'
  	  	  , 'react'
		  , 'react-dom'
		  , 'react-redux'
		  , 'react-router'
		  , 'react-tap-event-plugin'
		  , 'redux'
		  , 'react-router-redux'
  	  	]
	}
  ,	output: {
		path: path.join(__dirname, '../dist')
	  , filename: 'app.js'
	  , publicPath: '/dist/'
	}
  ,	plugins: [
		new webpack.optimize.OccurenceOrderPlugin()
	  ,	new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify('production')
			}
		})
	  ,	new webpack.optimize.UglifyJsPlugin({
			compressor: {
				warnings: false
			}
		})
	  , new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js')
	]
  ,	module: {
		loaders: [
			{
				test: /\.(js|jsx)$/
			  ,	loaders: ['babel']
			  ,	include: [path.join(__dirname, '../main'), path.join(__dirname, '../lib')]
			}
		  , {
				test: /\.css$/
			  , loader: 'style!css'
			}
		]
	}
}
