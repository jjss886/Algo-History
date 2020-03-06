/*

Given a 2D board and a word, find if the word exists in the grid.

The word can be constructed from letters of sequentially adjacent
cell, where "adjacent" cells are those horizontally or vertically
neighboring.

The same letter cell may not be used more than once.

Example:

board =
[
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
]

Given word = "ABCCED", return true.
Given word = "SEE", return true.
Given word = "ABCB", return false.

*/

function search(board, target) {
  for (let r = 0; r < board.length; r++) {
    for (let c = 0; c < board[r].length; c++) {
      const visited = new Array(board.length)
        .fill(null)
        .map(() => new Array(board[r].length).fill(false));

      if (board[r][c] === target[0]) {
        visited[r][c] = true;
        const res = traverse(board, visited, r, c, target.slice(1));
        if (res) return true;
      }
    }
  }

  return false;
}

function traverse(board, visited, r, c, target) {
  if (!target.length) return true;
  visited[r][c] = true;

  // CHECK UP
  if (r >= 1 && board[r - 1][c] === target[0] && !visited[r - 1][c]) {
    if (traverse(board, visited, r - 1, c, target.slice(1))) return true;
  }

  // CHECK DOWN
  if (
    r < board.length - 1 &&
    board[r + 1][c] === target[0] &&
    !visited[r + 1][c]
  ) {
    if (traverse(board, visited, r + 1, c, target.slice(1))) return true;
  }

  // CHECK RIGHT
  if (
    c < board[r].length - 1 &&
    board[r][c + 1] === target[0] &&
    !visited[r][c + 1]
  ) {
    if (traverse(board, visited, r, c + 1, target.slice(1))) return true;
  }

  // CHECK LEFT
  if (c >= 1 && board[r][c - 1] === target[0] && !visited[r][c - 1]) {
    if (traverse(board, visited, r, c - 1, target.slice(1))) return true;
  }

  visited[r][c] = false;
  return false;
}

const board = [
  ["A", "B", "C", "E"],
  ["S", "F", "C", "S"],
  ["A", "D", "E", "E"]
];

console.log(search(board, "SEED"));
