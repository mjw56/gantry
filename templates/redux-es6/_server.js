var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var config = require('./webpack.config');
var randemoji = require('emoji-random');
var emoji = require('node-emoji');

var express = require('express');
var app = new express();
var http = require('http');

var port = 3000

var compiler = webpack(config)
app.use(express.static(__dirname + '/dist'));
app.use(webpackDevMiddleware(compiler, 
  { noInfo: true, publicPath: config.output.publicPath }
))
app.use(webpackHotMiddleware(compiler))

app.get("/", function(req, res) {
  res.sendFile(__dirname + '/index.html')
})

app.get("/planets", function(req, res) {
  res.json([
    'The Sun',
    'Mercury',
    'Venus',
    'Earth',
    'Mars',
    'Jupiter',
    'Saturn',
    'Uranus',
    'Neptune'
  ]);
})

var server = http.createServer(app).listen(port, function(error) {
  if (error) {
    console.error(error)
  } else {
    console.info("==> " + emoji.get(randemoji.random()) + "  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
  }
});