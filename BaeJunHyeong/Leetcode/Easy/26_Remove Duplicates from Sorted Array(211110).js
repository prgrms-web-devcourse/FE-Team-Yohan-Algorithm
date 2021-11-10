/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  const n = nums.length - 1;
  let currentValue = nums[n];
  for (let i = n - 1; i >= 0; i--) {
    if (nums[i] === currentValue) {
      nums.splice(i, 1);
    } else {
      currentValue = nums[i];
    }
  }

  return nums.length;
};
