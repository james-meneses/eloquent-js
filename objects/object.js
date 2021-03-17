/* Understanding objects */

function speak (fala) {
    console.log(`The ${this.type} rabbit says ${fala}`)
}

let coelhoJao = {type: 'monstro', speak };
let coelhoBino = { type: 'albino', speak }

coelhoJao.speak('tá saindo da jaula o monstro')
coelhoBino.speak('mó sol do carai')

// trying some call()

speak.call(coelhoBino, "to que nem salmão")
speak.call(coelhoJao, "é 13 porra!")

// mais uma

function normalize () {
    console.log( this.coords.map( n => n / this.length) )
}


normalize.call( { coords: [0, 3, 4], length: 5  })

let coelhoDon = { type: 'don', coords: [0, 3, 4], length: 3, speak, normalize}

coelhoDon.normalize()

coelhoDon.normalize.call({ coords: [1, 2, 3], length: 6})

