/**
 * @title Lista de potencias
 * @author Elihu A. Cruz
 * @version 0.0.1
 */

// dado el siguiente conjunto de datos
let numbers = [2,9,12,3,4]
console.log('Datos iniciales: ', numbers)

// obtener una nueva lista con potencias
let potencias = []

// CÓDIGO
potencias = numbers.map(number => number * number)

console.log('Datos con potencia: ', potencias)

// obtener los numeros multiplos de dos (N % 2 == 0)
let filtrados = []

// CÓDIGO
filtrados = potencias.filter(potencia => {
  return (potencia % 2 == 0)
})

console.log('Datos filtrados, múltiplos de 2: ', filtrados)