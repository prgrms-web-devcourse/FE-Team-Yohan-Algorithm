function solution(n) {
  let answer = "";

  while (n > 0) {
    if (n % 3 === 0) {
      n = Math.floor(n / 3) - 1;
      answer += 4;
    } else if (n % 3 === 1) {
      n = Math.floor(n / 3);
      answer += 1;
    } else if (n % 3 === 2) {
      n = Math.floor(n / 3);
      answer += 2;
    }
  }

  return answer.split("").reverse().join("");
}