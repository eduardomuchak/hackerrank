function birthdayCakeCandles(candles) {
  let higherNumber = 0;
  candles.forEach((number) => {
    if (higherNumber < number) {
      higherNumber = number;
    }
  });

  const filteredCandles = candles
    .sort()
    .filter((number) => number === higherNumber);

  const result = filteredCandles.length;
  console.log(result);
}

birthdayCakeCandles([3, 2, 1, 3]);
