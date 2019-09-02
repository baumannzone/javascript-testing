// test-4.js

const { suma, resta } = require( './funcionesMatematicas' )
const { esperoQue, prueba } = require( './funcionesTesting' )

prueba( 'Suma 2 números positivos correctamente', () => {
  const resultado = suma( 2, 3 )
  const esperado = 5
  esperoQue( resultado ).seaIgualQue( esperado )
} )

prueba( 'Suma 2 números negativos correctamente', () => {
  const resultado = suma( -2, -3 )
  const esperado = -5
  esperoQue( resultado ).seaIgualQue( esperado )
} )

prueba( 'Resta 2 números correctamente', () => {
  const resultado = resta( 8, 3 )
  const esperado = 5
  esperoQue( resultado ).seaIgualQue( esperado )
} )

prueba( 'Resta 2 números negativos correctamente', () => {
  const resultado = resta( -8, -3 )
  const esperado = -5
  esperoQue( resultado ).seaIgualQue( esperado )
} )