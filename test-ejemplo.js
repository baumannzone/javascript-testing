/**
 * test-ejemplo.js
 * Ejemplo básico de un test en javascript
 */

const resultado = 1
const esperado = 2

if ( resultado !== esperado ) {
  throw new Error( `${ resultado } es distinto de ${ esperado }` )
}

console.log( '¡Todo OK! 👌' )