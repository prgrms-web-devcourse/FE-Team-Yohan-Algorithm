/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  const sMap = new Map();
  let sIndex = [];

  const tMap = new Map();
  let tIndex = [];

  let count = 0;
  for (const alpha of s) {
    if (sMap.has(alpha)) {
      sIndex.push(sMap.get(alpha));
    } else {
      sMap.set(alpha, count);
      sIndex.push(count++);
    }
  }

  count = 0;
  for (const alpha of t) {
    if (tMap.has(alpha)) {
      tIndex.push(tMap.get(alpha));
    } else {
      tMap.set(alpha, count);
      tIndex.push(count++);
    }
  }

  for (let i = 0; i < sIndex.length; i++) {
    if (sIndex[i] !== tIndex[i]) {
      return false;
    }
  }

  return true;
};
