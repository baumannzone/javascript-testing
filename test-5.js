// test-5.js

const { suma, resta } = require( './funcionesMatematicas' )

test( 'Suma 2 números positivos correctamente', () => {
  const resultado = suma( 2, 3 )
  const esperado = 5
  expect( resultado ).toBe( esperado )
} )

test( 'Suma 2 números negativos correctamente', () => {
  const resultado = suma( -2, -3 )
  const esperado = -5
  expect( resultado ).toBe( esperado )
} )

test( 'Resta 2 números positivos correctamente', () => {
  const resultado = resta( 8, 3 )
  const esperado = 5
  expect( resultado ).toBe( esperado )
} )

test( 'Resta 2 números negativos correctamente', () => {
  const resultado = resta( -8, -3 )
  const esperado = -5
  expect( resultado ).toBe( esperado )
} )