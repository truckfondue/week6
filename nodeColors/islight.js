var utilities = require('./luminosity.js');

var islight = function(luminosity) {
	if ( luminosity > 155 ) {
		return ('light');
	}
	else return('dark');
};

console.log(islight(utilities.luminosity(process.argv[2], process.argv[3], process.argv[4])));
