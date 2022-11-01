/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
*/

//Solution #1 - Runtime: 247 ms - Memory: 42.7 MB
const twoSum = (nums, target) => {
    for ( let i = 0; i < nums.length; i++ ) {
        if ( nums.includes(target - nums[i]) && (nums.indexOf(nums[i]) != nums.lastIndexOf(target - nums[i]))) {
            return [nums.indexOf(nums[i]), nums.lastIndexOf(target - nums[i])]
        }
    }
}

//Solution #2 - Runtime: 115 ms - Memory: 43.8 MB
const twoSumV = (nums, target) => {
    const hash = {};

    for ( let i = 0; i < nums.length; i++ ) {
        if ( hash[nums[i] ] >= 0 ) {
            return [hash[nums[i]] , i];
        }
        hash[target - nums[i]] = i;
    }
}

console.log(twoSumV([2,7,11,15,16], 31));