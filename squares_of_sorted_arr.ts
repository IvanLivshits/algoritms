/* 
Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

 

Example 1:

Input: nums = [-4,-1,0,3,10]
Output: [0,1,9,16,100]
Explanation: After squaring, the array becomes [16,1,0,9,100].
After sorting, it becomes [0,1,9,16,100].

Example 2:

Input: nums = [-7,-3,2,3,11]
Output: [4,9,9,49,121]
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
let sortedSquares = function(nums) {
    return nums.map(el => el ** 2).sort((a, b) => a - b)
};

console.log(sortedSquares([-4,-1,0,3,10]));
console.log('------')
console.log(sortedSquares([-7,-3,2,3,11]));