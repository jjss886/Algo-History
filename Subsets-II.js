/*

Given a collection of integers that might contain duplicates, nums, return all possible subsets (the power set).

Note: The solution set must not contain duplicate subsets.

Example:

Input: [1,2,2]
Output:
[
  [2],
  [1],
  [1,2,2],
  [2,2],
  [1,2],
  []
]

*/

var subsetsWithDup = function(nums) {
  const res = [];
  nums.sort((a, b) => a - b);

  function gen(arr, idx) {
    res.push(arr);

    for (let i = idx; i < nums.length; i++) {
      if (i !== idx && nums[i] === nums[i - 1]) continue;
      gen([...arr, nums[i]], i + 1);
    }
  }

  gen([], 0);
  return res;
};
