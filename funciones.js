/**
 * funciones.js
 * Listado con las funciones a utilizar en los tests
 */
const assert = require( 'assert' )


/**
 * Suma 2 números y retorna su valor
 * @param num1 {number}
 * @param num2 {number}
 * @returns {*}
 */
const suma = ( num1, num2 ) => num1 + num2


/**
 * Resta 2 números y retorna su valor
 * @param num1 {number}
 * @param num2 {number}
 * @returns {number}
 */
const resta = ( num1, num2 ) => num1 - num2


/**
 * Pequeña funcionalidad que comprueba si `dato` es igual a `esperado`
 * Es "encadenable"
 * @param dato {number} Dato de entrada, el resultado.
 * @returns {{seaIgualQue: seaIgualQue}}
 */
const esperoQue = ( dato ) => {
  return {
    seaIgualQue: ( esperado ) => {
      if ( dato !== esperado ) {
        throw new Error( `${ dato } es distinto que ${ esperado }` )
      }
      // También podemos usar 👇
      // return assert.strictEqual( dato, esperado )
    }
  }
}

const prueba = ( titulo, funcion ) => {
  try {
    funcion()
    console.log( `✅  · ${ titulo }` )
  } catch ( error ) {
    console.error( `❌  · ${ titulo }` )
    console.error( error )
  }
}

module.exports = { suma, resta, esperoQue, prueba }