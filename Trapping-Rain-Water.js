/*

Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it is able to trap after raining.

*/

var trap = function (height) {
  let leftMax = -1,
    rightMax = -1,
    left = 0,
    right = height.length - 1,
    res = 0;

  while (left < right) {
    leftMax = Math.max(height[left], leftMax);
    rightMax = Math.max(height[right], rightMax);

    if (leftMax > rightMax) {
      res += rightMax - height[right];
      right--;
    } else {
      res += leftMax - height[left];
      left++;
    }
  }

  return res;
};
