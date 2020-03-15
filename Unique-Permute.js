/*

Given a collection of numbers that might contain duplicates, return all possible unique permutations.

Example:

Input: [1,1,2]
Output:
[
  [1,1,2],
  [1,2,1],
  [2,1,1]
]

*/

var permuteUnique = function(nums) {
  const res = [];
  nums.sort((a, b) => a - b);

  function gen(cur, remain) {
    if (remain.length <= 1) {
      res.push(cur.concat(remain));
      return;
    }

    for (let i = 0; i < remain.length; i++) {
      if (i > 0 && remain[i] === remain[i - 1]) continue;
      cur.push(remain[i]);
      gen(cur.slice(), [...remain.slice(0, i), ...remain.slice(i + 1)]);
      cur.pop();
    }
  }

  gen([], nums);
  return res;
};
