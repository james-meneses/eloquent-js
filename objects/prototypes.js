/* Prototypes */

console.log( Object.getPrototypeOf({}) == Object.prototype)

console.log( Object.getPrototypeOf(Object.prototype))

console.log ( Object.getPrototypeOf(Math.min) == Function.prototype )

console.log ( Object.getPrototypeOf([]) == Array.prototype )

/* Things start to become interesting */

let protoCoelho = {
    falar (fala) {
        console.log (`O coelho ${this.tipo} diz ${fala}`)
    }
}

let coelhoDoido = Object.create(protoCoelho);

coelhoDoido.tipo = 'doido';
coelhoDoido.falar('guarapari buzios é minha arte');

let coelhoCalmo = Object.create(protoCoelho);

coelhoCalmo.tipo = 'calmo';
coelhoCalmo.falar('toma um chá pra ficar tranquilo');