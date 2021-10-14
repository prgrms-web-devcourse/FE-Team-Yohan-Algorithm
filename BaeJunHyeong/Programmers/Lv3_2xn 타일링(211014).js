function solution(n) {
  const fibo = Array.from(Array(n + 1), () => 0);
  fibo[1] = 1;
  fibo[2] = 2;
  if (n <= 2) return fibo[n];

  for (let i = 3; i <= n; i++) {
    fibo[i] = (fibo[i - 2] + fibo[i - 1]) % 1000000007;
  }
  return fibo[n];
}