// test-3.js

const { suma, resta } = require( './funcionesMatematicas' )
const { esperoQue } = require( './funcionesTesting' )

let resultado, esperado

// Probar suma ( 2 + 3 )
resultado = suma( 2, 3 )
esperado = 5
esperoQue( resultado ).seaIgualQue( esperado )


// Probar resta ( 8 - 3 )
resultado = resta( 8, 3 )
esperado = 5
esperoQue( resultado ).seaIgualQue( esperado )

// resultado = 5
// esperado = 1
// esperoQue( resultado ).seaMayorQue( esperado )

console.log( '¡Test3 OK! 👌' )