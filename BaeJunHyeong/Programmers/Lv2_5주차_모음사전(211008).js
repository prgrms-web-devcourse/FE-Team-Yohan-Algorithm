function solution(word) {
  let page = 1;
  const words = ["A"];
  const pages = ["A", "E", "I", "O", "U"];

  while (words.join("") !== word) {
    if (words.length < 5) {
      words.push("A");
      page++;
    } else {
      if (words[words.length - 1] === "U") {
        while (words[words.length - 1] === "U") {
          words.pop();
        }
        words[words.length - 1] =
          pages[pages.indexOf(words[words.length - 1]) + 1];
        page++;
      } else {
        words[words.length - 1] =
          pages[pages.indexOf(words[words.length - 1]) + 1];
        page++;
      }
    }
  }

  return page;
}