function solution(tickets) {
  const n = tickets.length;
  const check = Array.from(Array(n), () => 0);
  const answer = [];

  const DFS = (L, ans) => {
    if (L === n) {
      answer.push([...ans]);
    } else {
      for (let i = 0; i < n; i++) {
        if (ans[ans.length - 1] === tickets[i][0]) {
          if (check[i] === 0) {
            check[i] = 1;
            ans.push(tickets[i][1]);
            DFS(L + 1, ans, tickets[i]);
            check[i] = 0;
            ans.pop();
          }
        }
      }
    }
  };

  DFS(0, ["ICN"]);
  return answer.sort()[0];
}
