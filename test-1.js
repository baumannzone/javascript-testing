// test-1.js

const { suma, resta } = require( './funcionesMatematicas' )

let resultado, esperado

// Probar suma ( 2 + 3 )
resultado = suma( 2, 3 )
esperado = 5
if ( resultado !== esperado ) {
  throw new Error( `${ resultado } es distinto de ${ esperado }` )
}

// Probar resta ( 8 - 3 )
resultado = resta( 8, 3 )
esperado = 5
if ( resultado !== esperado ) {
  throw new Error( `${ resultado } es distinto de ${ esperado }` )
}

console.log( '¡Test1 OK! 👌' )