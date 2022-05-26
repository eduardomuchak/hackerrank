// Escreva uma função que receba um array de valores e mova todos os elementos que são zero para o final do array, os que forem diferente de zero devem ser continuar na ordem original que foram definidos.

// Por exemplo, no array seguinte:

// [7, 2, 3, 0, 4, 6, 0, 0, 13, 0, 78, 0, 0, 19, 14]

// é transformado em:

// [7, 2, 3, 4, 6, 13, 78, 19, 14, 0, 0, 0, 0, 0, 0]


// Desafio bonus:
// Refatore sua função sem usar nenhum array ou objeto temporário. Você também não pode usar nenhum desses métodos: Array.prototype ou Object.prototype

function removeZeros(array) {

  for(let i = 0; i < array.length - 1; i += 1) {
    for (let index = 0; index < array.length - 1; index += 1) {
      if (array[index] === 0) {
      array[index] = array[index +1]
      array[index + 1] = 0;
      }
    }
  }

  return array;
}

console.log(removeZeros([7, 2, 3, 0, 4, 6, 0, 0, 13, 0, 78, 0, 0, 19, 14])); // [7, 2, 3, 4, 6, 13, 78, 19, 14, 0, 0, 0, 0, 0, 0]
// DESAFIO RESOLVIDO COM AJUDA DE RODRIGO DE CASTRO

