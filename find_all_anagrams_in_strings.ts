/* 
438. Find All Anagrams in a String
Medium
10.5K
301
Companies
Given two strings s and p, return an array of all the start indices of p's anagrams in s. You may return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

Example 1:

Input: s = "cbaebabacd", p = "abc"
Output: [0,6]
Explanation:
The substring with start index = 0 is "cba", which is an anagram of "abc".
The substring with start index = 6 is "bac", which is an anagram of "abc".
Example 2:

Input: s = "abab", p = "ab"
Output: [0,1,2]
Explanation:
The substring with start index = 0 is "ab", which is an anagram of "ab".
The substring with start index = 1 is "ba", which is an anagram of "ab".
The substring with start index = 2 is "ab", which is an anagram of "ab".
*/

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
let findAnagrams = function(s, p) {
    const anagramIndexes = [];
    const hashMap = new Object();
    for ( let i = 0; i < p.length; i++ ) {
        hashMap[p[i]] = (hashMap[p[i]] || 0) + 1;
    };

    let leftBorder = 0;
    let rightBorder = 0;
    while( rightBorder < s.length ) {
        if ( hashMap[s[rightBorder]] > 0 ) {
            hashMap[s[rightBorder]]--;

            if ( rightBorder - leftBorder + 1 === p.length ) {
                anagramIndexes.push(leftBorder);
            }

            rightBorder++;
        } else {
            if ( hashMap[s[leftBorder]] !== undefined ) {
                hashMap[s[leftBorder]]++;
            }

            leftBorder++;
            if(leftBorder > rightBorder) {
                rightBorder = leftBorder;
            }
        }
    }

    return anagramIndexes;
};

console.log(findAnagrams("cbaebabacd", "abc"));
console.log('------');
console.log(findAnagrams("abab", "ab"));

