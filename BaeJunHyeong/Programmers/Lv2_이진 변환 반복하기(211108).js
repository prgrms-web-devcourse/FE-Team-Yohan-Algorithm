function solution(s) {
  let binaryCount = 0;
  let zeroCount = 0;
  let number = s;

  while (number !== "1") {
    const n = number.length;
    const c = number
      .split("")
      .filter((num) => num === "1")
      .join("").length;

    binaryCount++;
    zeroCount += n - c;
    number = c.toString(2);
  }

  return [binaryCount, zeroCount];
}
