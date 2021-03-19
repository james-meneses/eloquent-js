// Inheritance - by @james-meneses

class Matrix {
    constructor ( width, height, element = (x,y) => undefined) {
        this.width = width;
        this.height = height;
        this.content = [];

        // lets loop through all 'columns'
        for (let y = 0; y < height; y++) {
            // and rows 
            for (let x = 0; x < width; x++) {
                // if we received values in element, each matrix cell (right?) receive its value here
                this.content[y * width + x] = element(x, y)
            }
        }
    }

    get (x, y) { 
        return this.content[y * this.width + x]
    }

    set (x, y, value) {
        this.content[ y * this.width + x] = value
    }
}

class SymmetricMatrix extends Matrix {
    constructor ( size, element = (x, y) => undefined ) {
        super (size, size, (x, y) => {
            if (x < y) return element (y,x)
            else return element (x, y)
        })
    }

    set (x, y, value) {
        super.set (x, y, value)

        if (x != y) {
            super.set (y, x, value)
        }
    }

}

let minhaMatriz = new SymmetricMatrix (3, (x, y) => `x: ${x} y: ${y} `)
console.log(minhaMatriz.get(2,1))
