/*

A message containing letters from A-Z is being encoded to numbers using the following mapping:

'A' -> 1
'B' -> 2
...
'Z' -> 26
Given a non-empty string containing only digits, determine the total number of ways to decode it.

Example 1:

Input: "12"
Output: 2
Explanation: It could be decoded as "AB" (1 2) or "L" (12).
Example 2:

Input: "226"
Output: 3
Explanation: It could be decoded as "BZ" (2 26), "VF" (22 6), or "BBF" (2 2 6).

*/

var numDecodings = function(s) {
  if (!s || s[0] === "0" || !s.length) return 0;

  const dp = new Array(s.length + 1).fill(0);
  dp[0] = 1;
  dp[1] = 1;

  for (let i = 2; i <= s.length; i++) {
    const one = Number(s.slice(i - 1, i));
    if (one > 0) dp[i] += dp[i - 1];

    const two = Number(s.slice(i - 2, i));
    if (two > 9 && two < 27) dp[i] += dp[i - 2];
  }

  return dp[s.length];
};
