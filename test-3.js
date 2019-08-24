/**
 * test-3.js
 */
const { suma, resta, esperoQue } = require( './funciones' )

let resultado, esperado

// Probar suma ( 2 + 3 )
resultado = suma( 2, 3 )
esperado = 5
esperoQue( resultado ).seaIgualQue( esperado )


// Probar resta ( 8 - 3 )
resultado = resta( 8, 3 )
esperado = 5
esperoQue( resultado ).seaIgualQue( esperado )

console.log( '¡Test3 OK! 👌' )