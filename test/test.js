var should = require("should"),
	num2Word = require("../num2Word");

describe("num2Word tests", function () {
	
	describe("Whole number tests", function () {
		it("0 should equal zero", function () {
			num2Word(0).should.equal("zero");
		});

		it("1 should equal one", function () {	
			num2Word(1).should.equal("one");
		});
		
		it("2 should equal two", function () {
			num2Word(2).should.equal("two");
		});
		
		it("3 should equal three", function () {
			num2Word(3).should.equal("three");
		});
		
		it("4 should equal four", function () {
			num2Word(4).should.equal("four");
		});
		
		it("5 should equal five", function () {
			num2Word(5).should.equal("five");
		});
		
		it("6 should equal six", function () {
			num2Word(6).should.equal("six");
		});
		
		it("7 should equal seven", function () {
			num2Word(7).should.equal("seven");
		});
		
		it("8 should equal eight", function () {
			num2Word(8).should.equal("eight");
		});
		
		it("9 should equal nine", function () {
			num2Word(9).should.equal("nine");
		});
		
		it("10 should equal ten", function () {
			num2Word(10).should.equal("ten");
		});
		
		it("11 should equal eleven", function () {
			num2Word(11).should.equal("eleven");
		});
		
		it("12 should equal twelve", function () {
			num2Word(12).should.equal("twelve");
		});
		
		it("13 should equal thirteen", function () {
			num2Word(13).should.equal("thirteen");
		});
		
		it("14 should equal fourteen", function () {
			num2Word(14).should.equal("fourteen");
		});
		
		it("15 should equal fifteen", function () {
			num2Word(15).should.equal("fifteen");
		});
		
		it("16 should equal sixteen", function () {
			num2Word(16).should.equal("sixteen");
		});
		
		it("17 should equal seventeen", function () {
			num2Word(17).should.equal("seventeen");
		});
		
		it("18 should equal eighteen", function () {
			num2Word(18).should.equal("eighteen");
		});
		
		it("19 should equal nineteen", function () {
			num2Word(19).should.equal("nineteen");
		});
		
		it("20 should equal twenty", function () {
			num2Word(20).should.equal("twenty");
		});
		
		it("30 should equal thirty", function () {
			num2Word(30).should.equal("thirty");
		});
		
		it("40 should equal forty", function () {
			num2Word(40).should.equal("forty");
		});
		
		it("50 should equal fifty", function () {
			num2Word(50).should.equal("fifty");
		});
		
		it("60 should equal sixty", function () {
			num2Word(60).should.equal("sixty");
		});
		
		it("70 should equal seventy", function () {
			num2Word(70).should.equal("seventy");
		});
		
		it("80 should equal eighty", function () {
			num2Word(80).should.equal("eighty");
		});
		
		it("90 should equal ninety", function () {
			num2Word(90).should.equal("ninety");
		});
		
		it("100 should equal one hundred", function () {
			num2Word(100).should.equal("one hundred");
		});
		
		it("101 should equal one hundred one", function () {
			num2Word(101).should.equal("one hundred one");
		});
		
		it("222 should equal two hundred twenty-two", function () {
			num2Word(222).should.equal("two hundred twenty-two");
		});
		
		it("1000 should equal one thousand", function () {
			num2Word(1000).should.equal("one thousand");
		});
		
		it("5067 should equal five thousand sixty-seven", function () {
			num2Word(5067).should.equal("five thousand sixty-seven");
		});
		
		it("10,000 should equal ten thousand", function () {
			num2Word(10000).should.equal("ten thousand");
		});
		
		it("100,000 should equal one hundred thousand", function () {
			num2Word(100000).should.equal("one hundred thousand");
		});
		
		it("1,000,000 should equal one million", function () {
			num2Word(1000000).should.equal("one million");
		});
		
		it("1,000,000,000 should equal one billion", function () {
			num2Word(1000000000).should.equal("one billion");
		});
		
		it("1,000,000,000,000 should equal one trillion", function () {
			num2Word(1000000000000).should.equal("one trillion");
		});
		
		it("Max length number with zeros should equal one hundred centillion", function () {
			var num = "100" + new Array(304).join("0");
			num2Word(num).should.equal("one hundred centillion");
		});
		
		it("Largest number for num2Word should equal correct result", function () {
			var largestNumber = new Array(307).join("9"),
				array = ["centillion", "novemnonagintillion", "octononagintillion", "septennonagintillion", "sexnonagintillion",
				"quinnonagintillion", "quattuornonagintillion", "trenonagintillion", "duononagintillion", "unnonagintillion", 
				"nonagintillion", "novemoctogintillion", "octooctogintillion", "septoctogintillion", "sexoctogintillion", 
				"quinoctogintillion", "quattuoroctogintillion", "treoctogintillion", "duooctogintillion", "unoctogintillion", 
				"octogintillion", "novemseptuagintillion", "octoseptuagintillion", "septenseptuagintillion", "sexseptuagintillion", 
				"quinseptuagintillion", "quattuorseptuagintillion", "treseptuagintillion", "duoseptuagintillion", "unseptuagintillion", 
				"septuagintillion", "novemsexagintillion", "octosexagintillion", "septensexagintillion", "sexsexagintillion", 
				"quinsexagintillion", "quattuorsexagintillion", "tresexagintillion", "duosexagintillion", "unsexagintillion", 
				"sexagintillion", "novemquinquagintillion", "octoquinquagintillion", "septenquinquagintillion", "sexquinquagintillion", 
				"quinquinquagintillion", "quattuorquinquagintillion", "trequinquagintillion", "duoquinquagintillion", "unquinquagintillion", 
				"quinquagintillion", "novemquadragintillion", "octoquadragintillion", "septenquadragintillion", "sexquadragintillion", 
				"quinquadragintillion", "quattuorquadragintillion", "trequadragintillion", "duoquadragintillion", "unquadragintillion", 
				"quadragintillion", "novemtrigintillion", "octotrigintillion", "septentrigintillion", "sextrigintillion", "quintrigintillion", 
				"quattuortrigintillion", "tretrigintillion", "duotrigintillion", "untrigintillion", "trigintillion", "novemvigintillion", 
				"octovigintillion", "septenvigintillion", "sexvigintillion", "quinvigintillion", "quattuorvigintillion", "trevigintillion", 
				"duovigintillion", "unvigintillion", "vigintillion", "novemdecillion", "octodecillion", "septendecillion", "sexdecillion", 
				"quindecillion", "quattuordecillion", "tredecillion", "duodecillion", "undecillion", "decillion", "nonillion", "octillion", 
				"septillion", "sextillion", "quintillion", "quadrillion", "trillion", "billion", "million", "thousand"],
				stringNumber = "nine hundred ninety-nine " + array.join(" nine hundred ninety-nine ") + " nine hundred ninety-nine";
				
			num2Word(largestNumber).should.equal(stringNumber);
		});
		
		it("-0 should equal negative zero", function () {
			num2Word("-0").should.equal("negative zero");
		});
		
		it("-1 should equal negative one", function() {
			num2Word(-1).should.equal("negative one");
		});
	});
	
	describe("Validation tests", function() {
		it("0001 should equal one", function () {
			num2Word("0001").should.equal("one");
		});
		
		it("0000 should return zero", function () {
			num2Word("0000").should.equal("zero");
		});
		
		it("10jk should throw 10jk is not a number", function () {
			var caughtError = false;
			try {
				num2Word("10jk");
			} catch (e) {
				caughtError = true;
				e.message.should.equal("10jk is not a number.");
			}
			caughtError.should.equal(true);
		});
		
		it("empty string argument should throw Must supply a number or non-empty string argument", function () {
			var caughtError = false;
			try {
				num2Word("");
			} catch (e) {
				caughtError = true;
				e.message.should.equal("Must supply a number or non-empty string argument.");
			}
			caughtError.should.equal(true);
		});
		
		it("undefined argument should throw Must supply a number or non-empty string argument", function () {
			var caughtError = false;
			try {
				num2Word();
			} catch (e) {
				caughtError = true;
				e.message.should.equal("Must supply a number or non-empty string argument.");
			}
			caughtError.should.equal(true);
		});
		
		it("boolean argument should throw Must supply a number or non-empty string argument", function () {
			var caughtError = false;
			try {
				num2Word(true);
			} catch (e) {
				caughtError = true;
				e.message.should.equal("Must supply a number or non-empty string argument.");
			}
			caughtError.should.equal(true);
		});
		
		it("object argument should throw Must supply a number or non-empty string argument", function () {
			var caughtError = false;
			try {
				num2Word({});
			} catch (e) {
				caughtError = true;
				e.message.should.equal("Must supply a number or non-empty string argument.");
			}
			caughtError.should.equal(true);
		});
		
		it("function argument should throw Must supply a number or non-empty string argument", function () {
			var caughtError = false;
			try {
				num2Word(function () {});
			} catch (e) {
				caughtError = true;
				e.message.should.equal("Must supply a number or non-empty string argument.");
			}
			caughtError.should.equal(true);
		});
		
		it("--1 should equal one", function () {
			num2Word("--1").should.equal("one");
		});
		
		it("---1 should equal negative one", function () {
			num2Word("---1").should.equal("negative one");
		});
		
		it("12,106,234 with commas should equal twelve million one hundred six thousand two hundred thirty-four", function () {
			num2Word("12,106,234").should.equal("twelve million one hundred six thousand two hundred thirty-four");
		});
		
		it("Safe max integer number should return is too large to be passed as a number. Pass number in as a string.", function () {
			num2Word(9007199254740991).
				should.equal(9007199254740991 + " is too large to be passed as a number. Pass number in as a string.");
		});
		
		it("Whole number of length 307 should throw exceeds maximum number conversion", function () {
			var largeNumber = "1" + new Array(307).join("0"),
				caughtError = false;
			try {
				num2Word(largeNumber);
			} catch (e) {
				caughtError = true;
				e.message.should.equal(largeNumber + " exceeds num2Word's maximum number conversion.");
			}
			caughtError.should.equal(true);
		});
		
		it("small number should equal zero", function () {
			//"1e-324"
			var smallNumber = "." + new Array(325).join("0") + "1"; //Number.MIN_VALUE = 5e-324
			num2Word(smallNumber).should.equal("zero");
		});
	});
	
	describe("Decimal tests", function () {
		it("0.1 should equal zero point one", function () {
			num2Word("0.1").should.equal("zero point one");
		});
		
		it(".1 should equal zero point one", function () {
			num2Word(".1").should.equal("zero point one");
		});
		
		it(".2030 should equal zero point two zero three", function () {
			num2Word(".2030").should.equal("zero point two zero three");
		});
	});
	
	describe("Double number tests", function () {
		it("124,096.45 should equal one hundred twenty-four thousand ninety-six point four five", function () {
			num2Word("124096.45").should.equal("one hundred twenty-four thousand ninety-six point four five");
		});
	});
	
	describe("Exponential format tests", function () {
		it("1e+10 should equal ten duotrigintillion", function () {
			num2Word(1e+10).should.equal("ten billion");
		});
		
		it("1e+100 should equal ten duotrigintillion", function () {
			num2Word("1e+100").should.equal("ten duotrigintillion");
		});
		
		it("12.345e+2 should equal one thousand two hundred thirty-four point five", function () {
			num2Word(12.345e+2).should.equal("one thousand two hundred thirty-four point five");
		});
		
		it("5.28185e+7 should equal fifty-two million eight hundred eighteen thousand five hundred", function () {
			num2Word(5.28185e+7).should.equal("fifty-two million eight hundred eighteen thousand five hundred");
		});
		
		it("1e-5 should equal zero point zero zero zero zero one", function () {
			num2Word(1e-5).should.equal("zero point zero zero zero zero one");
		});
		
		it("45.37182e-1 should equal four point five three seven one eight two", function () {
			num2Word(45.37182e-1).should.equal("four point five three seven one eight two");
		});
		
		it("-2.16e4 should equal negative twenty-one thousand six hundred", function () {
			num2Word("-2.16e4").should.equal("negative twenty-one thousand six hundred");
		});
		
		it("432e-3 should equal zero point four three two", function () {
			num2Word(432e-3).should.equal("zero point four three two");
		});
		
		it(".16E2 should equal sixteen", function () {
			num2Word(".16E2").should.equal("sixteen");
		});
		
		it("-1.58192e+8 should equal negative one hundred fifty-eight million one hundred ninety-two thousand", function () {
			num2Word(-1.58192e+8).should.equal("negative one hundred fifty-eight million one hundred ninety-two thousand");
		});
	});
	
});