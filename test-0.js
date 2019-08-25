/**
 * test-0.js
 * El ejemplo más básico de un test en javascript. En este caso, falla.
 */

const resultado = 1
const esperado = 2

if ( resultado !== esperado ) {
  throw new Error( `${ resultado } es distinto de ${ esperado }` )
}

console.log( '¡Todo OK! 👌' )