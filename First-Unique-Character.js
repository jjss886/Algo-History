/*

Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

*/

var firstUniqChar = function(s) {
  const obj = {};

  for (const x of s) {
    obj[x] = (obj[x] || 0) + 1;
  }

  for (let i = 0; i < s.length; i++) {
    if (obj[s[i]] === 1) return i;
  }

  return -1;
};
