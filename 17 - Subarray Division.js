// s = Array de números dos quadrados na barra de chocolate (Pode ser qualquer número)
// d = dia do aniversário (Precisa ser maior que 0 e menor que 31)
// m = mês do aniversário (Precisa ser maior que 0 e menor que 12)

function birthday(s, d, m) {
  let count = 0;
  let sum = 0
  for (let index = 0; index <= (s.length - m); index += 1) {
    for (let index2 = 0; index2 < m; index2 += 1) {
      sum += s[index + index2]
    }
    if (sum === d) {
      count += 1;
    }
    sum = 0;
  }
  return count;
}

console.log(birthday([1, 2, 1, 3, 2], 3, 2));
// 2

// Exercício feito com a ajuda do professor Gustavo Caetano do canal no youtube 'tecnologia em video'.
// https://www.youtube.com/watch?v=fsmFCX5Obp8