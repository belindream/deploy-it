var path = require('path');
var express = require('express');
var webpack = require('webpack');
var fs = require('fs')
var config = require('../config/webpack.config.dev');

var app = express();
var compiler = webpack(config);
var port = 3000;


function getFileRealPath(s) {
	try {
		return fs.realpathSync(s)
	} catch(e) {
		return false
	}
}

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));
app.use('/static', express.static(path.join(__dirname, '../static')));

app.get('/favicon.ico', function(req, res) {
  res.sendStatus(404);
});
app.get('/*', function(req, res) {
	var indexPath = path.join(__dirname, '../index.html');
	res.sendFile(indexPath);
});
app.listen(port, 'localhost', function(err) {
  if (err) {
    return;
  }
});
