/* Symbols */

function Coelho (tipo) {
    console.log(tipo)
    this.tipo = tipo
}

let coelhoFofao = new Coelho('fofao');

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
