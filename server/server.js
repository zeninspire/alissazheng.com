var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
// var morgan = require('morgan')
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackConfig = require('../webpack.config.js');

var app = express();
var PORT = process.env.PORT || 9060;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

var compiler = webpack(webpackConfig);

app.use(webpackDevMiddleware(compiler, {
  publicPath: "/",
  stats: {
    // Config for minimal console.log mess.
    assets: false,
    colors: true,
    version: false,
    hash: false,
    timings: false,
    chunks: false,
    chunkModules: false
  }
}));

// serve static file
app.use(express.static(path.join(__dirname,'../dist')));

// re-configuring for react-router browserHistory:
app.get('*', function (request, response){
  response.sendFile(path.resolve(__dirname, '../dist', 'index.html'))
})

// rather than below
// app.get('/', function(req, res) {
// 	res.send('Hello World!')
// });

// app.use(morgan('dev'))



app.listen(PORT, () => console.log('Listening on port ', PORT));

