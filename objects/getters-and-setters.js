// Getters and Setters - by @james-meneses

// First, getter

let varyingSizes = {
    get size() {
        return Math.floor (Math.random() * 33)
    }
}

// console.log(varyingSizes.size)

class Temperature {
    constructor (celsius) {
        this.celsius = celsius
    }

    get fahrenheit () {
        return this.celsius * 1.8 + 32
    }

    set fahrenheit (value) {
        this.celsius = (value - 32) / 1.8
    }

    static fromFahrenheit (value) {
        return new Temperature ((value - 32) / 1.8)
    }

}

var clima = new Temperature(20)

console.log('20 graus em fahrenheit: ' + clima.fahrenheit)

clima.fahrenheit = 80

console.log('80 fahrenheit em celsius ' + Math.floor(clima.celsius))

var climaFahrenheit = Temperature.fromFahrenheit(100)
console.log(Math.floor(climaFahrenheit.celsius))