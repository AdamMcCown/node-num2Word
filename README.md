# node-num2Word
Convert a number to an English word representation

<article>

`
$ npm install num2word
`

<h1>Examples</h1>
  
```
var num2Word = require('num2Word');
    
console.log(num2Word(12.45));
//twelve point four five
    
console.log(num2Word('678,010.001'));
//six hundred seventy-eight thousand ten point zero zero one
    
console.log(num2Word(-1.58192e+8));
//negative one hundred fifty-eight million one hundred ninety-two thousand
```

Large numbers, e.g. Number.MAX_SAFE_INTEGER and beyond, need to be passed as a string.
  
```  
console.log(num2Word("9007199254740992"));
//nine quadrillion seven trillion one hundred ninety-nine billion two hundred fifty-four million seven hundred forty thousand nine hundred ninety-two
```
  
Numbers can go as high as the hundreds of centillions (306 digits), but no further.
And smaller numbers, e.g. Number.MIN_VALUE and below, are treated as zero.

</article>
