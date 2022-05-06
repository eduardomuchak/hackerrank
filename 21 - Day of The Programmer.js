function dayOfProgrammer(year) {
  let isLeapYear = false;
  if (year >= 1700 && year <= 2700) {
    if (year < 1918) {
      if (year % 4 === 0) {
        isLeapYear = true;
      }
    } else if (year > 1918) {
      if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
        isLeapYear = true;
      }
    }
    const februaryDays = year === 1918 ? 15 : (isLeapYear ? 29 : 28);
    const daysOfMonthsUntil256thDay = [31, februaryDays, 31, 30, 31, 30, 31, 31];
    console.log(daysOfMonthsUntil256thDay);
    const day = 256 - daysOfMonthsUntil256thDay.reduce((a, b) => a + b);
    return(`${day}.09.${year}`);
  }
  else {
    return 'Please, input a year between 1700 and 2700.';
  }
}

console.log(dayOfProgrammer(2022));
console.log(dayOfProgrammer(1918));
console.log(dayOfProgrammer(1800));