var express = require('express');
var bodyParser = require('body-parser');
var indexController = require('./controllers/index.js');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', function(req, res){
	res.render('index', {
		locations: 'Seville'
	});
});

app.get('/:locations', function(req, res){
	console.log(req.params.locations);
	res.render('index', {
		locations: locations[req.params.locations]
	});
	
});


//var locations = 'Seville';


var locations = {
	'Seville': 'Canary Islands',
	'Canary Islands': 'Cape Verde', 
	'Cape Verde': 'Straight of Magellan',
	'Straight of Magellan': 'Guam',
	'Guam': 'Phillines',
	'Phillines': 'Seville'

};

// var path = req.path;
// console.log(path);

var server = app.listen(8732, function() {
	console.log('Express server listening on port ' + server.address().port);
});
