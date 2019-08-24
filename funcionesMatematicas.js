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


module.exports = { suma, resta }