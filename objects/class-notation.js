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