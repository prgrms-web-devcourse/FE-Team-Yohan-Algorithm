function solution(n, s) {
  const answer = [];

  if (n > s) return [-1];
  else if (n === 1) return [s];

  const base = Math.floor(s / n);
  const remainer = s % n;

  for (let i = 0; i < n - remainer; i++) {
    answer.push(base);
  }
  for (let i = 0; i < remainer; i++) {
    answer.push(base + 1);
  }

  return answer;
}
