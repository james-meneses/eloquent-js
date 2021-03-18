// To make iterations, the objects passed in must be iterable
// For .. of .. uses the .iterator to go through all values
// It works in a way like this:

let okIterator = "OK"[Symbol.iterator]()

console.log(okIterator.next())
console.log(okIterator.next())
console.log(okIterator.next())

/* wich prints, for each line:
{ value: 'O', done: false }
{ value: 'K', done: false }
{ value: undefined, done: true }

done is plain string/boolean which defines if there's more value to iterate
next and value are plain strings as well 
*/

// Ah, we call this the iterator interface (at least the book does)

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

// lets build an iterator for the matrix
// so we get to understand how a iterator should work
// and maybe, someday, apply it on many fucking codes 
// if you're reading this, send me a pix so i can buy a coxinha, pls

class MatrixIterator {
    constructor (matrix) {
        this.x = 0;
        this.y = 0;
        this.matrix = matrix;
    }

    next () {
        // if we reached the bottom, then we're done
        if (this.y === this.matrix.height) return { done: true}

        // here we set the current value, right?
        let value = {
            x: this.x,
            y: this.y,
            value: this.matrix.get(this.x, this.y)
        };

        this.x++

        if ( this.x == this.matrix.width ) {
            this.x = 0
            this.y++
        }

        return {value, done: false}
    }
}

// now lets set up the Matrix to be iterable

Matrix.prototype[Symbol.iterator] = function() {
    return new MatrixIterator( this )
}


let matrix = new Matrix(2, 2, (x, y) => `value ${x}, ${y}`)
for (item of matrix ) {
    console.log(item)
}

// the for from the book
console.log ('\nFrom the book:')
for (let {x, y, value} of matrix) 
    console.log(x, y, value)
// sponsored by @brazilguettoboys 
// coded by @james-meneses || @yung-jaimo