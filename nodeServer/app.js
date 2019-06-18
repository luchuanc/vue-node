var express = require("express");
var path = require('path');
var app = express();
var mongoose = require("./server/mongoose");
var db = mongoose();
var bodyParser = require('body-parser');

var index = require("./router");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set('views', path.join(__dirname, 'www'));
app.engine('html', require('ejs').__express);  
app.set('view engine', 'html');

app.use('/static',express.static(path.join(__dirname,'www/static')));
app.use('/web',express.static(path.join(__dirname,'www/web')));
app.use('/', index);


app.listen(80);

