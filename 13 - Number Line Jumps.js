// x1 = Localização inicial do kangaroo 1;
// v1 = Velocidade do kangaroo 1;
// x2 = Localização inicial do kangaroo 2;
// v2 = Velocidade do kangaroo 2;

function kangaroo(x1, v1, x2, v2) {
  if (v1 > v2 && (x1 - x2) % (v2 - v1) === 0) {
    return "YES";
  } else {
    return "NO";
  }
}

console.log(kangaroo(0, 3, 4, 2));
console.log(kangaroo(0, 2, 5, 3));