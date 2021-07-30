class Rectangle extends Shape {
    constructor(id, x, y, width, height){
        super(id, x, y);
        this.width = width;
        this.height = height;
    }
    getSize() {
        return {
          width: this.width,
          height: this.height
        };
      }
}

class Circle extends Shape {
    constructor(id, x, y, radius) {
        super(id, x, y);
        this.radius = radius;
    }
}

console.log(` shape id: ${shape.id}, x :${shape.x}, y: ${shape.y} `);
let rectangle = new Rectangle(0, 2, 4, 6, 8);
console.log(`Rectangle size:`, JSON.stringify(rectangle.getSize()));
let circle = new Circle(9, 8 , 10);
console.log(`circle`,circle.getShape());