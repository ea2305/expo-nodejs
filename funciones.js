/**
 * @title Funciones
 * @author Elihu A. Cruz
 */

/**
 * Suma de dos numeros
 * @param {Number} a 
 * @param {Number} b 
 */
function suma (a, b) {
  return a + b
}


// Las variables pueden contener funciones
let multiplicacion = function (a, b) {
  return a * b
}

// división de elementos
let division = (a, b) => {
  return a / b
}

// división simplificada
let _division = (a, b) => a / b


// funciones que reciben funciones
function mapeo (number, accion) {
  // iteración de elementos
  for (let i = 1; i <= number; i++) {
    accion(i * number)
  }
}


// funciones recursivas
function factorial (number) {
  if (number == 0) {
    return 1
  } else {
    return number * factorial(number - 1)
  }
  // return (number == 0) ? 1 : number * factorial(number - 1)
}


// console.log('Resultado => ', suma(2, 2))
// console.log('Resultado => ', multiplicacion(2, 3))
// console.log('Resultado => ', division(2, 2))
// console.log('Resultado => ', _division(2, 2))

// console.log('Resultado => ', mapeo(5, console.log))

// console.log('Resultado => ', mapeo(5, 
//   (number) => {
//    console.log(number * 100)
//   }
// ))

console.log('Resultado => ', factorial(5))
