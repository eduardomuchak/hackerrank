/*
 * Complete the 'findDigits' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER n as parameter.
 */

function findDigits(n) {
  let numbersArray = n.toString().split(''); // ['1','0','1','2']
  let count = 0;

  numbersArray.forEach(number => {
    if (Number.isInteger(n / number)) {
      count += 1;
    }
  });
  return count;
}

console.log(findDigits(1012));