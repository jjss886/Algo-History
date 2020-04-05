/*

Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order.

*/

var spiralOrder = function (matrix) {
  if (matrix.length === 0) return [];

  const spiralArray = [];
  let rowBegin = 0,
    rowEnd = matrix.length - 1,
    colBegin = 0,
    colEnd = matrix[0].length - 1;

  while (colBegin <= colEnd && rowBegin <= rowEnd) {
    // RIGHT
    for (var i = colBegin; i <= colEnd; i++) {
      spiralArray.push(matrix[rowBegin][i]);
    }
    rowBegin++;

    // DOWN
    for (var i = rowBegin; i <= rowEnd; i++) {
      spiralArray.push(matrix[i][colEnd]);
    }
    colEnd--;

    // LEFT
    if (rowBegin <= rowEnd) {
      for (var i = colEnd; i >= colBegin; i--) {
        spiralArray.push(matrix[rowEnd][i]);
      }
    }
    rowEnd--;

    // UP
    if (colBegin <= colEnd) {
      for (var i = rowEnd; i >= rowBegin; i--) {
        spiralArray.push(matrix[i][colBegin]);
      }
    }
    colBegin++;
  }

  return spiralArray;
};
