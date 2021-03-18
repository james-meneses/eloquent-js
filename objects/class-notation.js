/* Fixando o class do ES6 - by @james-meneses */

class Coelho {
    constructor (tipo) {
        this.tipo = tipo
    }

    falar (fala) {
        console.log (`O coelho ${this.tipo} diz '${fala}'`)
    } 
}

let coelhoJose = new Coelho('punk')
coelhoJose.falar('now you do what they told ya')

let coelhoJoao = new Coelho('hipster')
coelhoJoao.falar('namaste')

/* Pode ser utilizado como expressão, sem data binding. Ainda entendi a utilidade disso, mas.. */
let object = new class { getWord(){ return 'hello!' }}
console.log(object.getWord())
// -> hello!

// Object and Array have different .toString() methods
// It happens thanks to overriding
// Your able to override the derived properties in an instance/object
// Thats great to create different behaviors as needed ;)
console.log (Object.prototype.toString.call([1,2]))