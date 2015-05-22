// console.log(process.argv);

// In Class Challenge

// Write  a node application that reverses a string
// that has been given the command line:

var reverseFunction = function(str){
	return str.split('').reverse().join('');
};

console.log(reverseFunction(str));


// In ClassChallenge:

// Write a node application that copiesa text file using command-line arguments.
// $ node app.js input.txt output.txt
// 
// 
// var fs = require('fs');

// var inputFileName = process.argv[2];
// var outputFileName = process.argv[3];

// var file = fs.readFileSync(inputFileName, 'utf-8');
// fs.writeFileSync(outputFileName, file);



