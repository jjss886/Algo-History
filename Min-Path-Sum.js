/*

Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right which minimizes the sum of all numbers along its path.

Note: You can only move either down or right at any point in time.

*/

var minPathSum = function(grid) {
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
      if (row === 0 && col === 0) continue;
      else if (row === 0) grid[row][col] += grid[row][col - 1];
      else if (col === 0) grid[row][col] += grid[row - 1][col];
      else grid[row][col] += Math.min(grid[row - 1][col], grid[row][col - 1]);
    }
  }

  return grid[grid.length - 1][grid[0].length - 1];
};
