/* 
You are visiting a farm that has a single row of fruit trees arranged from left to right. The trees are represented by an integer array fruits where fruits[i] is the type of fruit the ith tree produces.

You want to collect as much fruit as possible. However, the owner has some strict rules that you must follow:

    You only have two baskets, and each basket can only hold a single type of fruit. There is no limit on the amount of fruit each basket can hold.
    Starting from any tree of your choice, you must pick exactly one fruit from every tree (including the start tree) while moving to the right. The picked fruits must fit in one of your baskets.
    Once you reach a tree with fruit that cannot fit in your baskets, you must stop.

Given the integer array fruits, return the maximum number of fruits you can pick.

 

Example 1:

Input: fruits = [1,2,1]
Output: 3
Explanation: We can pick from all 3 trees.

Example 2:

Input: fruits = [0,1,2,2]
Output: 3
Explanation: We can pick from trees [1,2,2].
If we had started at the first tree, we would only pick from trees [0,1].

Example 3:

Input: fruits = [1,2,3,2,2]
Output: 4
Explanation: We can pick from trees [2,3,2,2].
If we had started at the first tree, we would only pick from trees [1,2].
*/

/**
 * @param {number[]} fruits
 * @return {number}
 */
let totalFruit = function(fruits) {
    if (new Set(fruits).size < 3) return fruits.length
    let max = 0, before = 0
    for (let i = 0; i < fruits.length; i++) {
        if (fruits[i] === fruits[i + 1]) {
            before++
            continue
        }
        const set = new Set()
        for (let j = i; j < fruits.length; j++) {
            set.add(fruits[j])
            if (set.size === 2) max = Math.max(max, j - i + 1 + before)
            if (set.size > 2) break
        }
        before = 0
    }
    return max
};

console.log(totalFruit([1,2,1]));   //3
console.log('-----');
console.log(totalFruit([0,1,2,2])); //3
console.log('-----');
console.log(totalFruit([1,2,3,2,2,1,1]));   //4
console.log('-----');
console.log(totalFruit([0,0,1,1]));   //4
console.log('-----');
console.log(totalFruit([0,0,0,0,0,0])); //6
console.log('-----');
console.log(totalFruit([0])); //6