/*
Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.

In other words, return true if one of s1's permutations is the substring of s2.

 

Example 1:

Input: s1 = "ab", s2 = "eidbaooo"
Output: true
Explanation: s2 contains one permutation of s1 ("ba").
Example 2:

Input: s1 = "ab", s2 = "eidboaoo"
Output: false
 */

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
let checkInclusion = function(s1, s2) {
  let doubledS2 = s2 + s2;
  let sortedS1 = s1.split('').sort().join('');

  if ( s2.includes(s1) ) {
    return true;
  }

  if ( s1.length == s2.length ) {
    if ( s1.split('').sort().join('').includes(s2.split('').sort().join('')) ) {
      return true;
  } 
    return false;
  }

  for ( let i = 0; i < doubledS2.length; i++ ) {
    let slicedS2 = doubledS2.slice(i, i + s1.length);
    let sortedS2 = slicedS2.split('').sort().join('');

    if ( sortedS2.includes(sortedS1) ) {
      return true;
    }
  }

  return false;
}

console.log(1, checkInclusion("ab", "eidbaooo"));
console.log('-----')
console.log(2, checkInclusion("ab", "eidboaoo"));
console.log('-----')
console.log(3, checkInclusion("abc", "bbbca"));
console.log('-----')
console.log(4, checkInclusion("hello", "ooolleoooleh"));
console.log('-----')
console.log(5, checkInclusion("prosperity", "properties"));
console.log('-----')
console.log(6, checkInclusion("dinitrophenylhydrazine", "acetylphenylhydrazine"));
console.log('-----')
