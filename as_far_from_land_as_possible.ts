/* 
Given an n x n grid containing only values 0 and 1, where 0 represents water and 1 represents land, find a water cell such that its distance to the nearest land cell is maximized, and return the distance. If no land or water exists in the grid, return -1.

The distance used in this problem is the Manhattan distance: the distance between two cells (x0, y0) and (x1, y1) is |x0 - x1| + |y0 - y1|.

 

Example 1:

Input: grid = [[1,0,1],[0,0,0],[1,0,1]]
Output: 2
Explanation: The cell (1, 1) is as far as possible from all the land with distance 2.

Example 2:

Input: grid = [[1,0,0],[0,0,0],[0,0,0]]
Output: 4
Explanation: The cell (2, 2) is as far as possible from all the land with distance 4.
*/

/**
 * @param {number[][]} grid
 * @return {number}
 */
let maxDistance = function(grid) {
    const rows = grid.length;
    const columns = grid[0].length;
    let answer = 0;

    const maxPossibleDistancePlusOne = rows + columns + 1;

    const checkingArr = Array(rows).fill(0).map(() => Array(columns).fill(maxPossibleDistancePlusOne));

    for ( let i = 0; i < rows; i++ ) {
        for ( let j = 0; j < columns; j++ ) {
            if ( grid[i][j] == 1 ) {
                checkingArr[i][j] = 0;
            } else {
                checkingArr[i][j] =  Math.min(checkingArr[i][j], Math.min(i > 0 ? checkingArr[i - 1][j] + 1 : maxPossibleDistancePlusOne, j > 0 ? checkingArr[i][j - 1] + 1 : maxPossibleDistancePlusOne))
            }
        }
    }

    for ( let i = rows - 1; i >= 0; i-- ) {
        for ( let j = columns - 1; j >= 0; j-- ) {
            checkingArr[i][j] = Math.min(checkingArr[i][j], Math.min(i < rows - 1 ? checkingArr[i + 1][j] + 1 : maxPossibleDistancePlusOne, j < columns - 1 ? checkingArr[i][j + 1] + 1 : maxPossibleDistancePlusOne));
            
            answer = Math.max(answer, checkingArr[i][j]);
        }
    }

    return answer == 0 || answer == maxPossibleDistancePlusOne ? -1 : answer;
}

console.log(maxDistance([[1,0,1],[0,0,0],[1,0,1]]));
console.log('-----');
console.log(maxDistance([[1,0,0],[0,0,0],[0,0,0]]));
console.log('-----');
console.log(maxDistance([[0,0,1,1,1],[0,1,1,0,0],[0,0,1,1,0],[1,0,0,0,0],[1,1,0,0,1]]));