/* The fucking exercises - by @james-meneses */
console.log ('\n#1 - flattening arrays');
let arrays = [[1, 2, 3], [4, 5], [6]];

console.log (arrays.reduce((total, item) => total.concat(item)))

// → [1, 2, 3, 4, 5, 6]


/* daqui pra baixo é só pra eu praticar mesmo kk */
console.log ('\n#1.1 - my fucking pause for playing');
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
console.log ('\n#2 - Your Own Loop');
/* Your own loop
Write a higher-order function loop that provides something like a for loop statement. 
It takes a value, a test function, an update function, and a body function. 
Each iteration, it first runs the test function on the current loop value and 
stops if that returns false. 
Then it calls the body function, giving it the current value. 
Finally, it calls the update function to create a new value and starts from the beginning.

When defining the function, you can use a regular loop to do the actual looping.*/

function loop ( start, test, updt, body ) {
    let val = start;
    while (test(val)) {
        body (val)
        val = updt (val)
    } 
}

loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1 */