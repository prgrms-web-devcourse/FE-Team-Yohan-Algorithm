function solution(genres, plays) {
  const totalGenreAndPlay = new Map();
  genres.forEach((genre, i) => {
    if (totalGenreAndPlay.has(genre)) {
      totalGenreAndPlay.set(
        genre,
        parseInt(totalGenreAndPlay.get(genre), 10) + plays[i]
      );
    } else {
      totalGenreAndPlay.set(genre, plays[i]);
    }
  });

  const totalPlay = [];
  for (const [genre, play] of totalGenreAndPlay) {
    totalPlay.push([genre, play]);
  }
  totalPlay.sort((a, b) => b[1] - a[1]);

  const answer = [];
  const genrePlayIndex = [];
  genres.forEach((genre, i) => {
    genrePlayIndex.push([genre, plays[i], i]);
  });
  genrePlayIndex.sort();

  totalPlay.forEach((play, i) => {
    const genre = genrePlayIndex.filter((e) => e[0] === play[0]);
    if (genre.length === 1) {
      answer.push(genre[0][2]);
    } else {
      genre.sort((a, b) => b[1] - a[1]);
      answer.push(genre[0][2]);
      answer.push(genre[1][2]);
    }
  });

  return answer;
}