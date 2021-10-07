function solution(weights, head2head) {
  const n = weights.length;
  const boxerInfo = Array.from(Array(n), () => [0, 0, 0, 0, 0]);

  head2head.forEach((points, index) => {
    boxerInfo[index][0] = index + 1;
    boxerInfo[index][1] = weights[index];

    points.split("").forEach((point, i) => {
      if (point !== "N") {
        boxerInfo[index][4]++;
      }

      if (point === "W") {
        boxerInfo[index][2]++;

        if (weights[index] < weights[i]) {
          boxerInfo[index][3]++;
        }
      }
    });

    if (boxerInfo[index][4]) {
      boxerInfo[index][2] = boxerInfo[index][2] / boxerInfo[index][4];
    }
  });

  const answer = [];

  boxerInfo
    .sort((a, b) => b[1] - a[1])
    .sort((a, b) => b[3] - a[3])
    .sort((a, b) => b[2] - a[2])
    .forEach((boxer) => answer.push(boxer[0]));

  return answer;
}