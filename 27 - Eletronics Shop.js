function getMoneySpent(keyboards, drives, b) {
  let max = -1;

  for(let keyboardIndex = 0; keyboardIndex < keyboards.length; keyboardIndex += 1) {
    const keyboardPrice = keyboards[keyboardIndex];

    for(let driveIndex = 0; driveIndex < drives.length; driveIndex += 1) {
      const drivePrice = drives[driveIndex];
      
      if (keyboardPrice + drivePrice <= b && keyboardPrice + drivePrice > max) {
        max = keyboardPrice + drivePrice;
      }
    }
  }
  return max;
}

console.log(getMoneySpent([3, 1], [5, 2, 8], 10));
