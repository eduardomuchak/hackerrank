// int x: Cat's position
// int y: Cat's position
// int z: Mouse's position

function catAndMouse(x, y, z) {
  if (Math.abs(x - z) < Math.abs(y - z)) {
    return "Cat A";
  } else if (Math.abs(x - z) > Math.abs(y - z)) {
    return "Cat B";
  }
  return "Mouse C";
}

console.log(catAndMouse(1, 2, 3)); // Cat B
console.log(catAndMouse(1, 3, 2)); // Mouse C