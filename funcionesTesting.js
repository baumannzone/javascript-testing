/**
 * funcionesTesting.js
 * Funciones de ayuda que utilizaremos para ejecutar nuestros tests
 */

/**
 * Comprueba si el valor de entrada 'dato' es igual al valor 'esperado'. Es encadenable.
 * @param dato {number}
 */
const esperoQue = ( dato ) => {
  return {
    seaIgualQue: ( esperado ) => {
      if ( dato !== esperado ) {
        throw new Error( `${ dato } es distinto que ${ esperado }` )
      }
      /* También podemos usar 👇 */
      // return assert.strictEqual( dato, esperado )
    }
  }
}

/**
 * Ejecuta el test (funcion) y require una descripcion (titulo) de dicho test
 * Si el test falla, logea el titulo del test y el error
 * Si el test se completa correctamente, logea el titulo del test
 *
 * @param titulo {string} Nombre descriptivo del test
 * @param funcion {function} Callback function
 */
const prueba = ( titulo, funcion ) => {
  try {
    funcion()
    console.log( `✅  · ${ titulo }` )
  } catch ( error ) {
    console.error( `❌  · ${ titulo }` )
    console.error( error )
  }
}

module.exports = { esperoQue, prueba }