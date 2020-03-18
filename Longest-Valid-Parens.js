/*

Given a string containing just the characters '(' and ')', find the length of the longest valid (well-formed) parentheses substring.

Example 1:

Input: "(()"
Output: 2
Explanation: The longest valid parentheses substring is "()"
Example 2:

Input: ")()())"
Output: 4
Explanation: The longest valid parentheses substring is "()()"

*/

var longestValidParentheses = function(s) {
  if (!s.length) return 0;

  const dp = new Array(s.length).fill(0),
    stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") stack.push(i);
    else if (stack.length) {
      const last = stack.pop();
      if (last === i - 1) dp[i] = (dp[i - 2] ? dp[i - 2] : 0) + 2;
      else dp[i] = (dp[i - last - 1] ? dp[i - last - 1] : 0) + 2;
    }
  }

  return Math.max(...dp);
};
