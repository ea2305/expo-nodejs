/**
 * @title Factorial ejemplo
 * @author Elihu A. Cruz
 * @version 0.0.1
 */

let number = 5
// 5 * 1, 5 * 2, 5 * 3, 5 * 4

console.log('Inicio => ', number)

for (let i = number - 1; i > 0; i--) {
  number = number * i
  // number *= i
}

console.log('Resultado => ', number)