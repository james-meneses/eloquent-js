/* Here we map all shit - by @james-meneses aka yung_jaimo */

let singers = [{
    name : 'Travis Scott',
    age: 27, 
    alive: true,
    genre: 'rap',
    rate: 5
}, {
    name: 'Chorão',
    age: 30,
    alive: false,
    genre: 'rock',
    rate: 5
}, {
    name: 'Mr. Catra',
    age: 45,
    genre: 'brazilian funk',
    alive: false, 
    rate: 5
}, {name: 'Manu Gavassi',
    age: 27,
    genre: 'shit',
    rate: 1,
    alive: true
}, {
    name: 'Jimmi Hendrix',
    age: 27,
    genre: 'rock',
    rate: 5, 
    alive: false
}]

function map ( array, transform ) {
    let mapped = []
    for ( let el of array ) {
        mapped.push(transform(el))
    }
    return mapped
}


let aliveSingers = singers.filter( singer => singer.alive )
let aliveSingersName = aliveSingers.map( singer => singer.name )
console.log ('Cantores vivos - ', aliveSingersName)

/* não dá pra tirar muito disso kk, mas só para aprender mesmo */