function miniMaxSum(arr) {
  const minArray = arr.sort().slice(0, arr.length - 1);
  const minSum = minArray.reduce((acc, curr) => acc + curr, 0);

  const maxArray = arr.sort().slice(1, arr.length);
  const maxSum = maxArray.reduce((acc, curr) => acc + curr, 0);

  console.log(minSum, maxSum);
}

miniMaxSum([1, 2, 3, 4, 5]);
miniMaxSum([7, 69, 2, 221, 8974]);
