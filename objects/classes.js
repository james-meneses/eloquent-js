/* Now, classes, things are getting hot here */

let protoCoelho = {
    falar (fala) {
        console.log (`O coelho ${this.tipo} diz ${fala}`)
    }
}


function makeCoelho (tipo) {
    let coelho = Object.create(protoCoelho)
    coelho.tipo = tipo
    return coelho
}

let coelhoZika = makeCoelho('zika')
coelhoZika.falar('o segredo é humildade e disciplina')

/* usando new */

function Coelho (tipo) {
    console.log(tipo)
    this.tipo = tipo
}

Coelho.prototype.gritar = function(fala) { 
    console.log(`O coelho ${this.tipo} grita ${fala}`) 
}

let cardiCoelho = new Coelho('cantor')
cardiCoelho.gritar ('CORONA VAIRUSSS');

/* Só fixando... */

// o prototype do construtor/função Coelho é o Function.prototype
console.log ( Object.getPrototypeOf (Coelho) === Function.prototype )

// o prototype do objeto (instância) cardiCoelho é o Coelho.prototype
console.log ( Object.getPrototypeOf (cardiCoelho) === Coelho.prototype )

Coelho.prototype.toString = function () {
    console.log('Sou o coelho ' + this.tipo )
}


let coelhoFofao = new Coelho('fofao');

// string() vai chamar o .toString() do Coelho, que tem retorno diferente do original (Object.toString())
String(coelhoFofao)

/* Symbols */

let sym = Symbol ("name")
Coelho.prototype[sym] = 'Jaime'
console.log(coelhoFofao[sym])


const toStringSymbol = Symbol("toString")

Array.prototype[toStringSymbol] = function () {
    return this.length + ' values'
}

console.log([1,2].toString())

console.log([1,2][toStringSymbol]())

let meuTexto = {
    [toStringSymbol]() { return 'O telefone tocou novamente...' }
}

console.log(meuTexto[toStringSymbol]())
