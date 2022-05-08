function* morgan (a, b) {
  a += 'z';
  b += 'z';

  const l = a.length + b.length - 2;
  for (let index = 0; index < l; index += 1) {
    if (a < b) {
      yield a[0];
      a = a.slice(1);
    } else {
      yield b[0];
      b = b.slice(1);
    }
  }
}

function morganAndString(a, b) {
  return Array.from(morgan(a, b)).join('');
}

console.log(morganAndString('ACA', 'BCF')); // ABCACF

// CÓDIGO FEITO COM BASE NO VÍDEO DO CANAL TECNOLOGIA EM VÍDEO
// https://www.youtube.com/watch?v=XpDPUKS119Y

// SOBRE YIELD:
// https://www.youtube.com/watch?v=4MlkC6gVn-w