/* The fucking exercises - by @james-meneses */

let arrays = [[1, 2, 3], [4, 5], [6]];

console.log (arrays.reduce((total, item) => total.concat(item)))

// → [1, 2, 3, 4, 5, 6]


/* daqui pra baixo é só pra eu praticar mesmo kk */
let numbers = [ 3, 8 , 13, 18, 21]
console.log('numeros =>', numbers);

let sum = (a, b) => a + b

console.log( 'todos numeros somados => ', numbers.reduce(sum) )

let pares = numbers.filter(n => n % 2 == 0)
// só pares
console.log( 'pares => ', pares.reduce(sum) )

let doubleImpares = numbers.filter( n => n%2 == 1).map(n => n*2)
console.log('impares x2 => ', doubleImpares)

/* voltando.. */

