function staircase(n) {
  let line = '';
  let position = n - 1;

  for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
    for (let columnIndex = 0; columnIndex < n; columnIndex += 1) {
      if (columnIndex < position) {
        line += ' ';
      } else {
        line += '#';
      }
    }
    position -= 1;
    console.log(line);
    line = '';
  }
}

staircase(6);
