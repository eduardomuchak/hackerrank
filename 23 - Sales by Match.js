// int n: the number of socks in the pile
// int ar[n]: the colors of each sock

function sockMerchant(n, ar) {
  let pairs = 0;
  let sockColors = {};
  for (let index = 0; index < n; index += 1) {
    if (sockColors[ar[index]]) {
      pairs += 1;
      delete sockColors[ar[index]];
    } else {
      sockColors[ar[index]] = true;
    }
  }
  return pairs;
}

console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]));
