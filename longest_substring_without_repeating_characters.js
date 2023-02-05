/*
3. Longest Substring Without Repeating Characters

Given a string s, find the length of the longest substring without repeating characters. 

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.

Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
*/

const lengthOfLongestSubstring = (s) => {
    let smallSubstring = '';
    let bigSubstring = '';

    for ( const letter of s ) {
        if ( !smallSubstring.includes(letter) ) {
            smallSubstring += letter;
        } else {
            if ( smallSubstring.length > bigSubstring.length ) {
                bigSubstring = smallSubstring;
                smallSubstring = smallSubstring.slice(smallSubstring.indexOf(letter) + 1) + letter;
            } else {
                smallSubstring = smallSubstring.slice(smallSubstring.indexOf(letter) + 1) + letter;
            }
        }
    }
    return bigSubstring.length > smallSubstring.length ? bigSubstring.length : smallSubstring.length;
};

console.log(lengthOfLongestSubstring("abcabcbb"));  //3 -> The answer is "abc", with the length of 3
console.log('-----');
console.log(lengthOfLongestSubstring("bbbbb")); //1 -> The answer is "b", with the length of 1
console.log('-----');
console.log(lengthOfLongestSubstring("pwwkew"));    //3 -> The answer is "wke", with the length of 3
console.log('-----');
console.log(lengthOfLongestSubstring("au"));    //2
console.log('-----');
console.log(lengthOfLongestSubstring("aab"));   //2
console.log('-----')
console.log(lengthOfLongestSubstring("dvdf"));  //3