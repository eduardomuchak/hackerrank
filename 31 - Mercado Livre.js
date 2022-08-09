// Complete a seguinte função para que a mesma devolva todos os possíveis
// números de 4 dígitos, onde cada um seja menor ou igual a <maxDigit>,
// e a soma dos dígitos de cada número gerado seja 21.
// Exemplos com maxDigit=6: 3666, 4566

function decompondoNumeros(maxDigit) {
  if (maxDigit <= 5) {
    console.log(null);
  }
  for (let firstNumber = 0; firstNumber <= maxDigit; firstNumber += 1) {
    for (let secondNumber = 0; secondNumber <= maxDigit; secondNumber += 1) {
      for (let thirdNumber = 0; thirdNumber <= maxDigit; thirdNumber += 1) {
        for (let fourthNumber = 0; fourthNumber <= maxDigit; fourthNumber += 1) {
          if (firstNumber + secondNumber + thirdNumber + fourthNumber === 21) {
            console.log(`${firstNumber}${secondNumber}${thirdNumber}${fourthNumber}`);
          }
        }
      }
    }
  }
}

decompondoNumeros(7);
