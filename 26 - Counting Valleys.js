function countingValleys(steps, path) {
  let count = 0;
  let altitude = 0;
  
  for (let index = 0; index < steps; index += 1) {
    if (path[index] === 'D') {
      altitude -= 1;
    } else {
      if (altitude === -1) {
        count += 1;
      }
      altitude += 1;
    }
  }
  return count
}

console.log(countingValleys(8, 'UDDDUDUU'));