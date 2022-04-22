function plusMinus(arr) {
  let positive = 0;
  let negative = 0;
  let zero = 0;
  for (let index = 0; index < arr.length; index += 1) {
    if (arr[index] > 0) {
      positive += 1;
    } else if (arr[index] < 0) {
      negative += 1;
    } else {
      zero += 1;
    }
  }
  console.log(positive / arr.length);
  console.log(negative / arr.length);
  console.log(zero / arr.length);
}

plusMinus([-4, 3, -9, 0, 4, 1]);