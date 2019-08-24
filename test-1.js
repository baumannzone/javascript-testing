// test-1.js

const { suma, resta } = require( './funciones' )

let resultado, esperado

// Probar suma
resultado = suma( 2, 3 )
esperado = 5
if ( resultado !== esperado ) {
  throw new Error( `${ resultado } es distinto de ${ esperado }` )
}

// Probar resta
resultado = resta( 10, 5 )
esperado = 5
if ( resultado !== esperado ) {
  throw new Error( `${ resultado } es distinto de ${ esperado }` )
}