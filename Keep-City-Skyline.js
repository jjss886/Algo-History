/*

In a 2 dimensional array grid, each value grid[i][j] represents the height of a building located there. We are allowed to increase the height of any number of buildings, by any amount (the amounts can be different for different buildings). Height 0 is considered to be a building as well.

At the end, the "skyline" when viewed from all four directions of the grid, i.e. top, bottom, left, and right, must be the same as the skyline of the original grid. A city's skyline is the outer contour of the rectangles formed by all the buildings when viewed from a distance. See the following example.

What is the maximum total sum that the height of the buildings can be increased?

*/

var maxIncreaseKeepingSkyline = function(grid) {
  let res = 0;

  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[r].length; c++) {
      res += search(grid, r, c);
    }
  }

  return res;
};

function search(g, r, c) {
  let one = 0,
    two = 0;

  for (let i = 0; i < g.length; i++) {
    one = Math.max(one, g[i][c]);
  }

  for (let i = 0; i < g[r].length; i++) {
    two = Math.max(two, g[r][i]);
  }

  return Math.min(one, two) - g[r][c];
}
