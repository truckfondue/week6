var addNumbers = function(str){
	var total = 0;
	var current = '';


	var oneString = str.split(' ').join('').split('');
	//console.log(oneString);
		for (var i = 0; i < oneString.length; i++) {
			
			
			if ( isNaN(oneString[i]) === false ) {
				current += oneString[i];
				
			}
			else if ( isNaN(oneString[i]) === true && current !== '' ) {
				total += parseInt(current);
				current = '';
			}
		//console.log('total: ' + total);
		//console.log('current :' + current);
		} return total;
		
};

console.log(addNumbers('88hello 3world'));

var longestWord =  function(str){
	var longest = 0;
	var word = '';
	var strArr = str.split(' ');
	strArr.map(function(el){
		if ( el.length > longest) {
			longest = el.length;
			word = el;
		}
		
	});
	//console.log( word);
	return word;
};

console.log('The longest word is: ' + longestWord('this and that is the longest'));

var averageStringNumbers = function(str){
	var numTotal = 0;
	var letterCount = 0;
	var oneString = str.split(' ').join('').split('');
	var blacklist =('.,!?');
	oneString = oneString.filter(function(c){
		return blacklist.indexOf(c) === -1;
	});


	for (var i = 0; i < oneString.length; i++) {
			
			
			if ( isNaN(oneString[i]) === false ) {
				numTotal += parseInt(oneString[i]);
				
			}
			else if ( isNaN(oneString[i]) === true ) {
				letterCount ++;
			}
			
	}
	//console.log(numTotal, letterCount);
	return (numTotal / letterCount);
};

console.log(averageStringNumbers("Hello6 9World 2, Nic8e D7ay!"));
































