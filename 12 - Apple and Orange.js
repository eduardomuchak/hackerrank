// s = Início da casa;
// t = Final da casa;
// a = Posição da árvore de maças;
// b = Posição da árvore de laranjas;
// apples = Array com as localizações das maças que caíram da árvore;
// oranges = Array com as localizações das laranjas que caíram da árvore;

function countApplesAndOranges(s, t, a, b, apples, oranges) {
  let applesCount = 0;
  let orangesCount = 0;

  apples.forEach(apple => {
    if ((apple + a) >= s && (apple + a) <= t) {
      applesCount += 1;
    }
  });

  oranges.forEach(orange => {
    if ((orange + b) <= t && (orange + b) >= s) {
      orangesCount += 1;
    }
  });

  console.log(applesCount);
  console.log(orangesCount);
}

countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6]);