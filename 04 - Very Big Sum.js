function aVeryBigSum(ar) {
  let sum = 0;
  ar.forEach((element) => {
    sum += element;
  })
  return sum;
}

console.log(aVeryBigSum([1000000001, 1000000002, 1000000003, 1000000004, 1000000005]));