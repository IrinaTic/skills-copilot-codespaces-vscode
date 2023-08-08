// create web server
// 1. load modules
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var db = mongoose.connection;
var Comment = require('./models/comment');

// 2. create express object
var app = express();

// 3. set properties
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// 4. use middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({
	extended: false
}));

// 5. connect to mongodb server
mongoose.connect('mongodb://localhost:27017