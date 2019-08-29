// funcionesTesting.js

/**
 * Ejecuta una expresión y comprueba las aserciones. Si falla, lanza un error.
 * @param dato {number} Número a comprobar
 */
const esperoQue = ( dato ) => {
  return {
    /**
     *
     * @param esperado
     */
    seaIgualQue: ( esperado ) => {
      if ( dato !== esperado ) {
        throw new Error( `${ dato } es distinto que ${ esperado }` )
      }
      /* También podemos usar 👇 */
      // return assert.strictEqual( dato, esperado )
    },
    /**
     *
     * @param esperado
     */
    seaMayorQue: ( esperado ) => {
      if ( dato <= esperado ) {
        throw new Error( `${ dato } no es mayor que ${ esperado }` )
      }
    },
    /**
     *
     * @param esperado
     */
    seaMenorQue: ( esperado ) => {
      if ( dato => esperado ) {
        throw new Error( `${ dato } no es menor que ${ esperado }` )
      }
    },
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