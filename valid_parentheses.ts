/* 
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
*/

/**
 * @param {string} s
 * @return {boolean}
 */
let isValid = function(s) {
    // let openBrackets = new Array();
    // const openBracketsTypes  = '({[';
    // const closedBracketTypes = ')}]';
    
    // for ( const char of s ) {
    //     //if open bracket
    //     if ( openBracketsTypes.includes(char) ) {
    //         openBrackets.push(char);
    //     }
    //     //if closed bracket
    //     if ( closedBracketTypes.includes(char) ) {
    //         if ( openBracketsTypes.indexOf(openBrackets[openBrackets.length - 1]) == closedBracketTypes.indexOf(char) ) {
    //             openBrackets.pop();
    //         } else {
    //             return false;
    //         }
    //     }
    // }
    // return !openBrackets.length && true;

    let brackets = new Map();
    const result = [];

    brackets.set('(', ')');
    brackets.set('{', '}');
    brackets.set('[', ']');

    for (let i = 0; i < s.length; i++) {
        if ( brackets.has(s[i]) ) {
            result.push(s[i]);
        } else {
            if ( brackets.get(result.pop()) !== s[i] ) {
                return false;
            }
        }
    }
    return result.length === 0;
};

console.log(isValid("()"));
console.log('-----')
console.log(isValid("()[]{}"));
console.log('-----')
console.log(isValid("(]"));
console.log('-----')
console.log(isValid("([)]"));