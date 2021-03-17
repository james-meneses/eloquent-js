/* Now lets reduce everything to the ground - by @james-meneses */

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


function reduce ( array, combine, start ) {
    let current = start
    for (let el of array ) {
        current = combine (current, el)
        //console.log (el, current)
    }
    return current
}

let singersRate = singers.map(singer => singer.rate)

console.log("Average rate: ",  reduce(singersRate, (a, b) => a +  b, 0)/singersRate.length)

