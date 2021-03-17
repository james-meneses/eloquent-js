//Here we learn how to 'filter' - by @james-meneses

function filter (array, test) {
    let passed = []
    for ( let el of array ) {
        if (test(el)) {
            
            passed.push(el)
        }
    }
    return passed
}

const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

let fibonacciPar = filter (fibonacci, n => n % 2 == 0)
let fibonacciImpar = filter (fibonacci, n => n % 2 == 1)

console.log( "Os pares entre os 10 primeiros valores da seq. Fibonacci são ", fibonacciPar)
console.log( "Os impares entre os 10 primeiros valores da seq. Fibonacci são ", fibonacciImpar)