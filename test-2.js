// test-2.js
// https://nodejs.org/api/assert.html#assert_assert

const assert = require( 'assert' )
const { suma, resta } = require( './funcionesMatematicas' )

let resultado, esperado

// Probar suma ( 2 + 3 )
resultado = suma( 2, 3 )
esperado = 5
assert.strictEqual( resultado, esperado )

// Probar resta ( 8 - 3 )
resultado = resta( 8, 3 )
esperado = 5
assert.strictEqual( resultado, esperado )

console.log( '¡Test2 OK! 👌' )