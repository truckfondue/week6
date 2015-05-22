//var utilities = require('./luminosity.js');

var darken = function(r, g, b) {
	var r = r*0.8;
	var g = g*0.8;
	var b = b*0.8;

	return [r, g, b];
		
};

console.log(darken(process.argv[2], process.argv[3], process.argv[4]));
