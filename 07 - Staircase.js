function staircase(n) {
  let string = '';
  for (let index = 0; index < n; index++) {
    let space = '';
    for (let index2 = 0; index2 < n - index - 1; index2++) {
      space += ' ';
    }
    let hash = '';
    for (let index3 = 0; index3 < index + 1; index3++) {
      hash += '#';
    }
    // "\n" is the new line character
    string += space + hash + '\n';
  }
  return string;
}

console.log(staircase(6));
