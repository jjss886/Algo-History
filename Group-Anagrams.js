/*

Given an array of strings, group anagrams together.

Example:

Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
Output:
[
  ["ate","eat","tea"],
  ["nat","tan"],
  ["bat"]
]

*/

var groupAnagrams = function (strs) {
  const hash = strs.reduce((a, v) => {
    const str = v.split("").sort().join("");

    if (str in a) a[str].push(v);
    else a[str] = [v];

    return a;
  }, {});

  return Object.values(hash);
};
