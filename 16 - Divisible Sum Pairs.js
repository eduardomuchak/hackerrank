// n = Quantidade de itens no array
// k = Divisor
// ar = Array de itens

function divisibleSumPairs(n, k, ar) {
  let count = 0;
  for (let index = 0; index < n; index += 1) {
    for (let index2 = index + 1; index2 < n; index2 += 1) {
      if ((ar[index] + ar[index2]) % k === 0) {
          count += 1;
      }
    }
  }
  return count;
}

console.log(divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2]));