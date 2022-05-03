// bill: an array of integers representing the cost of each item ordered;
// k: an integer representing the zero-based index of the item Anna doesn't eat;
// b: the amount of money that Anna contributed to the bill

function bonAppetit(bill, k, b) {
  let total = 0;
  for (let index = 0; index < bill.length; index += 1) {
    if (index !== k) {
      total += bill[index];
    }
  }
  let anna = total / 2;
  if (anna === b) {
    console.log('Bon Appetit');
  } else {
    console.log(b - anna);
  }
}

bonAppetit([3, 10, 2, 9], 1, 12); // 5
