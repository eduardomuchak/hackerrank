function compareTriplets(a, b) {
  let result = [0, 0];

  for (let index = 0; index < a.length; index += 1){
    if (a[index] > b[index]){
      result[0] += 1 
    } else if (a[index] < b[index]){
      result[1] += 1
    }
  }
  return result;
}

console.log(compareTriplets([1, 2, 3], [3, 2, 1]));