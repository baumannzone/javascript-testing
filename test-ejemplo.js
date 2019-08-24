// Ejemplo básico de un test en javascript

const resultado = 1
const esperado = 2

if ( resultado !== esperado ) {
  throw new Error( `${ resultado } no es igual a ${ esperado }` )
}

console.log( 'Todo ok! 👌' )