class Shape{
    constructor(id, x, y) {
        this.id = id;
        this.move(x, y);
    }
    move(x,y) {
        this.x = x;
        this.y = y;
    }
    getShape() {
        return{
            
            x : this.x,
            y: this.y
        };
    }
}
let shape = new Shape(3, 5, 7);
console.log(shape.getShape())
console.log(`id:`,shape.id);

shape.move(2, 4);
console.log(shape.getShape())
