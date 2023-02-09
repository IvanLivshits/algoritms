/* 
Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).



Example 1:

Input: x = 123
Output: 321

Example 2:

Input: x = -123
Output: -321

Example 3:

Input: x = 120
Output: 21
*/

/**
 * @param {number} x
 * @return {number}
 */
let reverse = function(x) {
    const value = x >= 0 ? parseInt(x.toString().split('').reverse().join('') , 10) : parseInt('-' + parseInt(x.toString().split('').reverse().slice(0, (x.toString().length - 1)).join(''), 10));
    return value >= 2**31 - 1 ? 0 : value <= -(2**31) ? 0 : value;
};

console.log(reverse(123));  //321
console.log('-----');
console.log(reverse(-123)); //-321
console.log('-----')
console.log(reverse(120));  //21