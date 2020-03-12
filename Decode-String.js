/*

Given an encoded string, return its decoded string.

The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.

You may assume that the input string is always valid; No extra white spaces, square brackets are well-formed, etc.

Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. For example, there won't be input like 3a or 2[4].

Examples:

s = "3[a]2[bc]", return "aaabcbc".
s = "3[a2[c]]", return "accaccacc".
s = "2[abc]3[cd]ef", return "abcabccdcdcdef".

*/

var decodeString = function(s) {
  let res = "";
  let num = "";
  const mult = [];
  const repStr = [];

  for (const l of s) {
    // TRACK REPEAT DEPTH
    if (!isNaN(l)) num += String(l);
    // STORE WHAT TO REPEAT AND REFRESH
    else if (l === "[") {
      // STORE NUMBER OF TIMES TO REPEAT AND RESET
      mult.push(num);
      num = "";

      // STORE TEXT TO REPEAT AND RESET, KNOW THERE'S A CLOSE
      repStr.push(res);
      res = "";
    } else if (l === "]") {
      // SETTING PREFIX OF WHAT'S CURRENTLY RES AND REPEAT STORED TEXT
      res = repStr.pop() + res.repeat(mult.pop());
    } else res += l;
  }

  return res;
};
