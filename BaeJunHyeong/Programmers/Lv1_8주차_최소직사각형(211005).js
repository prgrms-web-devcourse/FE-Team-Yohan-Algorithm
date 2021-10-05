function solution(sizes) {
  const answer = [0, 0]
  sizes.map(size => {
    return size.sort((a, b) => a - b);
  }).forEach(size => {
    answer[0] = Math.max(answer[0], size[0]);
    answer[1] = Math.max(answer[1], size[1]);
  })
  
  return answer[0] * answer[1];
}