/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  if (!s.match(/[a-zA-Z0-9]/g)) return true;

  const onlyAlphabet = s
    .match(/[a-zA-Z0-9]/g)
    .join("")
    .toLowerCase();
  const reverseString = onlyAlphabet.split("").reverse().join("");
  return onlyAlphabet === reverseString;
};
