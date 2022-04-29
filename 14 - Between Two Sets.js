function getTotalX(a, b) {
  let result = 0;
  let highestNumber = Math.max(...b);
  let lowestNumber = Math.min(...a);
  for (let index = lowestNumber; index <= highestNumber; index += 1) {
    if (a.every((number) => index % number === 0) 
      && b.every((number) => number % index === 0)) {
      result += 1;
    }
  }
  return result;
}

console.log(getTotalX([2, 4], [16, 32, 96]));