var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));


var emails =[
	{useremail: 'livedurango@gmail.com'}
];

app.get('/', function(req, res) {
	res.render('index', {
		// counterJade: counterNode,
		emailsJade: emails
	});

	// counterNode++;
});

app.post('/formSubmit', function(req, res) {
	console.log(req.body);

	var email = req.body.email;

	emails.push({
		useremail: email
	});
	res.redirect('/');
	// res.redirect('/success');
});

// app.get('/success', function(req, res){
	// res.send('SUCCESS!');
// });



var server = app.listen(7588, function() {
	console.log('Express server listening on port ' + server.address().port);
});
