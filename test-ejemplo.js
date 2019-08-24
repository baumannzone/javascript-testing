// Ejemplo básico de un test en javascript

const dato = 1
const esperado = 2

if ( dato !== esperado ) {
  throw new Error( `${ dato } no es igual a ${ esperado }` )
}

console.log('Todo ok! 👌')