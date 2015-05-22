// $ node app.js output.txt input1.txt input2.txt etc
// 
// 
var fs = require('fs');


var outputFileName = process.argv[2];
var argNum = process.argv.length;
var input = [];
for (var i = 2; i < argNum; i++) {
	input.push(process.argv[i]);
}


// var file = fs.readFileSync(inputFileName, 'utf-8');
console.log(fs.writeFileSync(outputFileName, input.join('\n')));