/*
  Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].
*/

var productExceptSelf = function(nums) {
  const res = [];

  nums.reduceRight((acm, val, i) => {
    res[i] = acm;
    return (acm *= val);
  }, 1);

  nums.reduce((acm, val, i) => {
    res[i] *= acm;
    return (acm *= val);
  }, 1);

  return res;
};
