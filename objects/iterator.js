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
        return this.content[y * width + x]
    }

    set (x, y, value) {
        this.content[ y * width + x] = value
    }
}

class MatrixIterator {
    constructor (matrix) {
        this.x = 0;
        thix.y = 0;
        this.matrix = matrix;
    }

    next () {
        if (this.y === this.matrix.height) return { done: true}

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


