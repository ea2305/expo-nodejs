/**
 * @title Arreglos y estructras
 * @author Elihu A. Cruz
 * @version 0.0.1
 */

// Arreglo = Lista

// [A] <-> [B] <-> [C]

// un solo tipo
let arreglo = [1,2,3]

let primerElemento = arreglo.shift()
let ultimoElemento = arreglo.pop()

// prueba de concepto
 // console.log(arreglo, 'primer elemento: ' + primerElemento, 'ultimo elemento: ' + ultimoElemento)

// arreglo de diferentes tipos
let arregloDinamico = [1,2,'3','adios']

 // console.log(arregloDinamico)

/**
 * Objetos y contenido
 */

let objeto = {
  inicio: 'inicio, contenido inicial'
}

let objeto2 = {
  id: 12,
  fin: 'contenido de objeto final'
}

// agregar elementos de la lista
arregloDinamico.unshift(objeto)
arregloDinamico.push(objeto2)

// console.log('despues de operaciones', arregloDinamico)

let nombres = ['Alejandro', 'Alberto', 'Andrés']

console.log('Nombres: ', nombres)


// invertir
console.log('Nombres invertidos: ', 
  nombres.reverse()
)


// buscar
console.log('Resultado de busqueda: ', 

  nombres.find(function (nombre) {
    return nombre == 'Alberto'
  })

)


// capitalizar y buscar
console.log(
  'Resultado de busqueda con funciones encadenadas: ', 
  nombres
    .map(nombre => nombre.toUpperCase())
    .find(nombre => nombre === 'ALEJANDRO')
)


// funciones en callbacks
function upperCaseName (name) {
  return name.toUpperCase()
}

// funciones en callbacks
function findByName (name) {
  return name === 'ALEJANDRO'
}

// capitalizar y buscar
console.log(
  'Resultado de busqueda con funciones con nombre: ', 
  nombres
    .map(upperCaseName)
    .find(findByName)
)

console.log(
  nombres
    .forEach(
      function (nombre) { 
        console.log(nombre) 
      }
    )
)


console.log(
  nombres.map(function (nombre) { 
    return nombre + ' - Cambiado en map'
  }
))

// filtrado de elementos
let numbers = [1,2,3,4,5,6,20,1,2,8] 

console.log(
  numbers.filter((number) => {
    return number > 5
  })
)

