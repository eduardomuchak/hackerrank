function diagonalDifference(arr) {  
  let firstDiagonal = 0;
  let secondDiagonal = 0;
    
  for (let index = 0; index < arr.length; index += 1) {
    firstDiagonal += arr[index][index];
    secondDiagonal += arr[index][arr.length - 1 - index];
  }
  return Math.abs(firstDiagonal - secondDiagonal)
}

console.log(diagonalDifference([[11, 2, 4], [4, 5, 6], [10, 8, -12]]));