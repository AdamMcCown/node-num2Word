var coreNumbers = {'0': 'zero', '1': 'one', '2': 'two', '3': 'three', '4': 'four', '5': 'five', 
				'6': 'six', '7': 'seven', '8': 'eight', '9': 'nine', '10': 'ten', '11': 'eleven',
				'12': 'twelve', '13': 'thirteen', '14': 'fourteen', '15': 'fifteen',
				'16': 'sixteen', '17': 'seventeen',	'18': 'eighteen', '19': 'nineteen'};
var irty = {'2': 'twenty', '3': 'thirty', '4': 'forty', '5': 'fifty', '6': 'sixty', '7': 'seventy', 
			'8': 'eighty', '9': 'ninety'};
//larger maps the possible commas in a number to it's base word,
//e.g. 10000000 (10,000,000) has 2 commas and maps to million
var larger = {'1': 'thousand', '2': 'million', '3': 'billion', '4': 'trillion', '5': 'quadrillion',
			'6': 'quintillion', '7': 'sextillion', '8': 'septillion', '9': 'octillion', '10': 'nonillion',
			'11': 'decillion', '12': 'undecillion', '13': 'duodecillion', '14': 'tredecillion', '15': 'quattuordecillion',
			'16': 'quindecillion', '17': 'sexdecillion', '18': 'septendecillion', '19': 'octodecillion',
			'20': 'novemdecillion', '21': 'vigintillion', '22': 'unvigintillion', '23': 'duovigintillion',
			'24': 'trevigintillion', '25': 'quattuorvigintillion', '26': 'quinvigintillion', '27': 'sexvigintillion',
			'28': 'septenvigintillion', '29': 'octovigintillion', '30': 'novemvigintillion', '31': 'trigintillion',
			'32': 'untrigintillion', '33': 'duotrigintillion', '34': 'tretrigintillion', '35': 'quattuortrigintillion',
			'36': 'quintrigintillion', '37': 'sextrigintillion', '38': 'septentrigintillion', '39': 'octotrigintillion',
			'40': 'novemtrigintillion', '41': 'quadragintillion', '42': 'unquadragintillion', '43': 'duoquadragintillion',
			'44': 'trequadragintillion', '45': 'quattuorquadragintillion', '46': 'quinquadragintillion',
			'47': 'sexquadragintillion', '48': 'septenquadragintillion', '49': 'octoquadragintillion',
			'50': 'novemquadragintillion', '51': 'quinquagintillion', '52':'unquinquagintillion',
			'53': 'duoquinquagintillion', '54': 'trequinquagintillion', '55': 'quattuorquinquagintillion',
			'56': 'quinquinquagintillion', '57': 'sexquinquagintillion', '58': 'septenquinquagintillion',
			'59': 'octoquinquagintillion', '60': 'novemquinquagintillion', '61': 'sexagintillion',
			'62': 'unsexagintillion', '63': 'duosexagintillion', '64': 'tresexagintillion', '65': 'quattuorsexagintillion',
			'66': 'quinsexagintillion', '67': 'sexsexagintillion', '68': 'septensexagintillion', '69': 'octosexagintillion',
			'70': 'novemsexagintillion', '71': 'septuagintillion', '72': 'unseptuagintillion', '73': 'duoseptuagintillion',
			'74': 'treseptuagintillion', '75': 'quattuorseptuagintillion', '76': 'quinseptuagintillion',
			'77': 'sexseptuagintillion', '78': 'septenseptuagintillion', '79': 'octoseptuagintillion',
			'80': 'novemseptuagintillion', '81': 'octogintillion', '82': 'unoctogintillion', '83': 'duooctogintillion',
			'84': 'treoctogintillion', '85': 'quattuoroctogintillion', '86': 'quinoctogintillion', '87': 'sexoctogintillion',
			'88': 'septoctogintillion', '89': 'octooctogintillion', '90': 'novemoctogintillion', '91': 'nonagintillion',
			'92': 'unnonagintillion', '93': 'duononagintillion', '94': 'trenonagintillion', '95': 'quattuornonagintillion',
			'96': 'quinnonagintillion', '97': 'sexnonagintillion', '98': 'septennonagintillion', '99': 'octononagintillion',
			'100': 'novemnonagintillion', '101': 'centillion'};

module.exports = num2Word;

/**
* Takes a number and converts it to an equivalent English word form
*
* @method num2Word
* @param {Number || String} number or string representation of number to be converted to a word
* @return {String} number as an English word
*/
function num2Word(number) {
	//check valid argument
	if (number === '' || (typeof number !== 'number' && typeof number !== 'string')) {
		throw Error('Must supply a number or non-empty string argument.');
	}
	
	//allow multiple leading negatives and allow commas, 
	//but we're not checking comma format, e.g. 1,2,3,4 is 1234
	var stringNumber = trimLeadingNegatives(number.toString()).replace(/,/g, ''),
		wordedNumber = '',
		parts = [],
		wholeNumber = '',
		decimalNumber = '';
	
	//not a number check
	if (isNaN(stringNumber)) {
		throw Error(number + " is not a number.");
	}
	
	//isNaN does some of the validation for exponentials
	stringNumber = convertExponentialToNumber(stringNumber);
	parts = stringNumber.split('.');
	wholeNumber = parts[0];
	decimalNumber = parts[1];

	//check if whole number is too large as a number or string
	if (typeof number === 'number' && parseInt(wholeNumber, 10) >= 9007199254740991) {//ES6 Number.MAX_SAFE_INTEGER
		return number + " is too large to be passed as a number. Pass number in as a string.";
	} else if (wholeNumber.length > 306) {
		throw Error(number + " exceeds num2Word's maximum number conversion.");
	}
	
	//check if decimal number is too small
	if (decimalNumber && parseFloat("." + decimalNumber, 10) <= Number.MIN_VALUE) {
		decimalNumber = '0';//or '' or throw Error (throwing Error would currently break tests)
	}
	
	//negative number check
	if (wholeNumber[0] === "-") {
		wordedNumber = "negative " + getWholeNumber(wholeNumber.substring(1)) + " " + getDecimalNumber(decimalNumber);
	} else {
		wordedNumber = getWholeNumber(wholeNumber) + " " + getDecimalNumber(decimalNumber);
	}

	//remove trailing space when there is no decimal number, e.g only whole numbers
	wordedNumber = wordedNumber.replace(/\s$/, '');
	return wordedNumber;
}

function getWholeNumber(wholeNumber) {
	if (wholeNumber === '') {
		//a number like .1 has as its whole number ''
		return 'zero'; //or '' but tests would currently break
	}
	
	var words = [],
		parsedObject,
		wordedNumber = '';
	
	//iterate through whole number parsing the largest unit 
	//and converting it to a word to be added to the list of words
	//and replacing wholeNumber with the parsed sub-string
	//until there is nothing left
	while (true) {
		//trimLeadingZeros b/c a number like 1001 will get a sub-string of 001 that needs to be trimmed to 1
		parsedObject = parseLargestNumber(trimLeadingZeros(wholeNumber));
		words.push(parsedObject.largestNumber2Word);
		wholeNumber = parsedObject.subNumber;
		if (!wholeNumber) {
			break;
		}
	}
	
	//determines if the last word can be zero, e.g. 40 is forty, not forty zero
	if (words.length > 1 && words[words.length - 1] === 'zero') {
		words.pop();
	}
	
	//join the words and close the spaces when dashes are present, e.g. forty-five not forty- five
	wordedNumber = words.join(" ").replace(/-\s/g, '-');
	return wordedNumber;
}

function parseLargestNumber(wholeNumber) {	
	var numberLength = wholeNumber.length,
		largestNumber2Word = '',
		subNumber = '';
		
	if (numberLength === 1) {
		//0,1,2,...,9
		largestNumber2Word = coreNumbers[wholeNumber];
	} else if (numberLength === 2) {
		if (wholeNumber in coreNumbers) {
			//10,11,12,...,19
			largestNumber2Word = coreNumbers[wholeNumber];
		} else {
			//20,21,22,...99
			largestNumber2Word = irty[wholeNumber[0]] + addDash(wholeNumber[1]);
			subNumber = wholeNumber.substring(1);//or wholeNumber[1]
		}
	} else if (numberLength === 3) {
		//100,101,102,...,999
		largestNumber2Word = coreNumbers[wholeNumber[0]] + " hundred";
		subNumber = wholeNumber.substring(1);
	} else {
		//>=1000 but less than 307 digits
		//we need to treat a number like 124,096 like 124 is a single unit
		//because the 124 in that number needs to return one hundred twenty-four thousand
		//and not one hundred thousand twenty thousand four thousand
		var maxNumberOfZeros = numberLength - 1, //a number with 6 digits has at most 5 zeros and 1 comma(s), i.e. 100,000
			maxCommas = Math.floor(maxNumberOfZeros / 3),
			remainder = maxNumberOfZeros % 3,
			largestPortion = wholeNumber.substring(0, remainder + 1);
			
		largestNumber2Word = getWholeNumber(largestPortion) + " " + larger[maxCommas];
		subNumber = wholeNumber.substring(remainder + 1);
	}
	
	function addDash(digit) {
		return digit === '0' ? '' : '-';
	}
	
	//return parsed object
	return {
		largestNumber2Word: largestNumber2Word,
		subNumber: subNumber
	};
}

function getDecimalNumber(decimalNumber) {
	if (decimalNumber === undefined) {
		return '';
	}
	
	//trim zeros on the right, e.g. .10 is .1
	decimalNumber = decimalNumber.replace(/0+$/, '');
	
	//decimal number was trailing zero(s)
	if (decimalNumber === '') {
		return '';
	}
	
	var i,
		max = decimalNumber.length,
		wordedNumber = '',
		words = ["point"];
		
	//nothing fancy here, while it might make more sense to say a number like .12 is point twelve
	//it's also correct to say it's point one two and that's the approach here
	for (i = 0; i < max; i += 1) {
		words.push(coreNumbers[decimalNumber[i]]);
	}
	
	wordedNumber = words.join(" ");
	return wordedNumber;
}

function trimLeadingNegatives(stringNumber) {
	//trim negatives on the left, e.g. --10 is 10 and ---12 is -12
	stringNumber = stringNumber.replace(/^-+/, function(negatives) {
		return negatives.length % 2 === 0 ? '' : '-';
	});	
	return stringNumber;
}

function trimLeadingZeros(stringNumber) {
	//trim zeros on the left, e.g. 001 is 1 and 0000 is 0
	stringNumber = stringNumber.replace(/^(0+)(\d?)/, function (pattern, zeros, remainder) { 
		return remainder || '0';
	});
	return stringNumber;
}

function convertExponentialToNumber(stringNumber) {
	var parts = stringNumber.split(/[eE]/);
	if (parts.length === 1) {
		return stringNumber;
	}
	
	var leftNumber = parts[0],
		rightNumber = parts[1],
		sign = '',
		numZeros = 0,
		regexp,
		i;
		
	//determine the sign of the exponential
	if (/^[+-]/.test(rightNumber)) {
		sign = rightNumber[0];
		rightNumber = rightNumber.substring(1);
	} else {
		//default sign to positive, e.g 1e100 is 1e+100
		sign = '+';
	}
	
	numZeros = parseInt(rightNumber, 10);
	
	//make sure we have a decimal before pre(suf)fixing zeros so that we can shift it left(right)
	if (leftNumber.indexOf('.') === -1) {
		leftNumber += '.';
	}
	
	//find which regexp to use and prefix or suffix numZeros onto leftNumber
	if (sign === '+') {
		leftNumber = leftNumber + new Array(numZeros + 1).join("0");
		regexp = /(\.)(\d)/;//shift decimal right
	} else if (sign === '-') {
		leftNumber = new Array(numZeros + 1).join("0") + leftNumber;
		regexp = /(\d)(\.)/;//shift decimal left
	} else {
		throw Error("Unexpected sign '" + sign + "' occurred while parsingExponential.");
	}
	
	//shift decimal numZero times either right or left
	for (i = 0; i < numZeros; i += 1) {
		leftNumber = leftNumber.replace(regexp, "$2$1");
	}
	
	//trim any leading or trailing zeros and remove decimal if it's last
	stringNumber = leftNumber.replace(/(^0+|0+$)/g, '').replace(/\.$/, '');
	return stringNumber;
}