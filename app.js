
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// app.get('/', function());
app.get('/', function (req, res)
{
    res.render('index.html',{ title: 'JinaMall',titleClass : 'pure-menu-selected' });
});
app.get('/productList', function (req, res)
{
    res.render('productList.html',{ title: 'JinaMall',titleClass : 'pure-menu-selected' });
});
app.get('/contact', function (req, res)
{
    res.render('contact.html',{ title: 'JinaMall',titleClass : 'pure-menu-selected' });
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
