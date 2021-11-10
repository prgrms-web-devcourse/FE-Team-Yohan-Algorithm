/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function (columnNumber) {
  const alphabetArray = Array.from(Array(27), (_, i) =>
    String.fromCharCode(64 + i)
  );
  let answer = "";

  while (columnNumber) {
    if (columnNumber % 26 === 0) {
      answer = alphabetArray[26] + answer;
      columnNumber = columnNumber / 26 - 1;
    } else {
      answer = alphabetArray[columnNumber % 26] + answer;
      columnNumber = Math.floor(columnNumber / 26);
    }
  }

  return answer;
};
