function solution(n) {
  const answer = [0, 1, 2];
  if (n < 3) {
    return answer[n];
  }

  for (let i = 3; i <= n; i++) {
    const nextStep = (answer[i - 1] + answer[i - 2]) % 1234567;
    answer.push(nextStep);
  }

  return answer[n];
}
