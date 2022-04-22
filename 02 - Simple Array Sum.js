function simpleArraySum(array) {
  let sum = 0; 
  array.forEach(number => {
    sum += number;
  });
  return sum;
}
console.log(simpleArraySum([1, 2, 3, 4, 10, 11]));