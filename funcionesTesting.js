/**
 * Comprueba si `dato` es igual a `esperado`. Es encadenable.
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

/**
 * Ejecuta el test (funcion) y require una descripcion (titulo) de dicho test
 * Si el test falla, logea el titulo del test y el error
 * Si el test se completa correctamente, logea el titulo del test
 * @param titulo {string}
 * @param funcion {function}
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