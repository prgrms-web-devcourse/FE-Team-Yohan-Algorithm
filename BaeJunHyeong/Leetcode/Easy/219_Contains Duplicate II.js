/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      for (let j = 0; j < map.get(nums[i]).length; j++) {
        if (Math.abs(map.get(nums[i])[j] - i) <= k) {
          return true;
        }
      }
      map.set(nums[i], [...map.get(nums[i]), i]);
    } else {
      map.set(nums[i], [i]);
    }
  }
  nums.forEach((num, index) => {});
  return false;
};
