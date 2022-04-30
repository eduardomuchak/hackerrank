function breakingRecords(scores) {
  let beatLower = 0;
  let beatHigher = 0;
  let higherRecord = scores[0];
  let lowerRecord = scores[0];
  scores.forEach(score => {
    if (score > higherRecord) {
      higherRecord = score;
      beatHigher += 1;
    }
    if (score < lowerRecord) {
      lowerRecord = score;
      beatLower += 1;
    }
  });
  return [beatHigher, beatLower];
}

console.log(breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]));