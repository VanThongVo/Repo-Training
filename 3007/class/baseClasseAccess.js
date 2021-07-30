class Shape2 {
    constructor(id, x, y) {
      this.id = id;
      this.x = x;
      this.y = y;
    }
    get() {
        return `Shape(${this.id})`;
    }
}    
class Rectangle2 extends Shape2 {
    constructor(id, x, y, width, height) {
      super(id, x, y);
      this.width = width;
    }
    toString() {
      return `Rectangle > ${super.get()} ${this.width}`;
    }
  }
  class Circle2 extends Shape2 {
    constructor(id, x, y, radius) {
      super(id, x, y);
    }
    toString() {
      return `Circle > ${super.get()}`;
    }
  }
  
  let shape2 = new Shape2(1, 10, 20);
  console.log(shape2.get());
  let rectangle2 = new Rectangle2(2, 20, 30, 40);
  console.log(rectangle2.toString());
  let circle2 = new Circle2(3, 30, 40);
  console.log(circle2.toString());