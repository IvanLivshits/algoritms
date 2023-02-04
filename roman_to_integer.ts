/* 
Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer.
*/

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let counter = 0;
    const romanSymbols = s.split('');

    for (let i = 0; i < romanSymbols.length; i++ ) {
        //I
        if ( romanSymbols[i] == 'I' ) {
            if ( romanSymbols[i+1] == 'V' ) counter += 4
            else if ( romanSymbols[i+1] == 'X' ) counter += 9
            else counter += 1;
        }

        //V
        if ( romanSymbols[i] == 'V' ) {
            if ( romanSymbols[i-1] == 'I' ) counter += 0;
            else counter += 5;
        }

        //X
        if ( romanSymbols[i] == 'X' ) {
            if ( romanSymbols[i+1] == 'L' ) counter += 40;
            else if ( romanSymbols[i+1] == 'C' ) counter += 90;
            else if ( romanSymbols[i-1] == 'I' ) counter += 0;
            else {counter += 10};
        }

        //L
        if ( romanSymbols[i] == 'L' ) {
            if ( romanSymbols[i-1] == 'X' ) counter += 0;
            else counter += 50;
        }

        //C
        if ( romanSymbols[i] == 'C' ) {
            if ( romanSymbols[i+1] == 'D' ) counter += 400;
            else if ( romanSymbols[i+1] == 'M' ) counter += 900;
            else if ( romanSymbols[i-1] == 'X' ) counter += 0;
            else counter += 100;
        }
        
        //D
        if ( romanSymbols[i] == 'D' ) {
            if ( romanSymbols[i-1] == 'C' ) counter += 0;
            else counter += 500;
        }

        //M
        if ( romanSymbols[i] == 'M') {
            if ( romanSymbols[i-1] == 'C' ) counter += 0;
            else counter += 1000;
        }
    }
    return counter;
};

console.log(romanToInt('III')); //3
console.log('----------------------------')
console.log(romanToInt('IX')); //9
console.log('----------------------------')
console.log(romanToInt('LVIII'));   //58
console.log('----------------------------')
console.log(romanToInt('MCMXCIV')); //1994
console.log('----------------------------')
