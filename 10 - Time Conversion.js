function timeConversion(s) {
  const amPm = s.slice(8);
  const fullTime = s.substring(0, 8);
  const time = fullTime.split(':');

  if (amPm === 'PM') {
    if (time[0] === '12') {
      time[0] = '12';
    } else {
      time[0] = Number(time[0]) + 12;
    }
  } else {
    if (time[0] === '12') {
      time[0] = '00';
    }
  }

  return time.join(':');
}

console.log(timeConversion('12:45:54PM'));
