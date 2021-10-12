/**
 * @filedesc EXEMPLOS EM JAVASCRIPT
 *
 */

// Faça um loop de 1 a 10 
for (let i = 1; i <= 10; i++) {
  // defina uma array, uma array é uma lista de valores
  const array1 = [];
  // Se o número for par, adicione ele ao array
  if (i % 2 === 0) {
    array.push(i);
  }

  // defina uma array2, que vai contar valores ímpares
  const array2 = [];

  // Se o número for ímpar, adicione ele ao array2
  if (i % 2 !== 0) {
    array2.push(i);
  }

  // defina uma array 3, que conterá valores multiplos de 5
  const array3 = [];

  // Se o número for múltiplo de 5, adicione ele ao array3
  if (i % 5 === 0) {
    array3.push(i);
  }

  // defina uma array 4, que conterá valores multiplos de 3
  const array4 = [];

  // Se o número for múltiplo de 3, adicione ele ao array4
  if (i % 3 === 0) {
    array4.push(i);
  }

  // imprima as arrays
  console.log(array1, array2, array3, array4);

}
