function migratoryBirds(arr) {
  let birds = {};
  
  arr.forEach((bird) => {
    birds[bird] = (birds[bird] || 0) + 1
  });
  // Após o forEach:
  // birds = { '1': 2, '2': 2, '3': 3, '4': 3, '5': 1 };

  const maxValue = Math.max(...Object.values(birds))
  // maxValue = 3;

  const lowerKeyWithMostBirds = Object.keys(birds).find((key) => birds[key] === maxValue);
  // lowerKeyWithMostBirds = 3;

  return lowerKeyWithMostBirds
}

console.log(migratoryBirds([1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4]));