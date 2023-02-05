/* 
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
*/

/**
 * @param {string[]} strs
 * @return {string}
 */
let longestCommonPrefix = function(strs) {
    let smallestString = strs[0];
    let finalString = "";
    let counter = 0;

    if ( !strs.length ) {
        return finalString;
    }

    for ( const str of strs ) {
        str.length < smallestString.length ? smallestString = str : null;
    }

    const isNotSameStrings = strs.some(el => !el.slice(0, smallestString.length).includes(smallestString));

    if ( !isNotSameStrings ) {
        return smallestString;
    }

    for ( let i = 0; i < smallestString.length; i++ ) {
        for ( let j = 0; j < strs.length; j++ ) {
            if ( strs[j][i] == smallestString[i] ) {
                counter++
            }
        }
        if ( counter == strs.length ) {
            counter = 0;
            finalString += smallestString[i];
        } else {
            counter = 0;
            return finalString;
        }
    }

    return finalString;
};

console.log(longestCommonPrefix(["flower","flow","flight"]));
console.log('-----');
console.log(longestCommonPrefix(["dog","racecar","car"]));
console.log('-----');
console.log(longestCommonPrefix(["dog","dog","dog"]));
console.log('-----');
console.log(longestCommonPrefix(["doggo","dog","doggie"]));
console.log('-----');
console.log(longestCommonPrefix([]));
console.log('-----');
console.log(longestCommonPrefix(["cir","car"]))