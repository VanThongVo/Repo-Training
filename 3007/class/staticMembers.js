class Lemon extends Shape {
    constructor(id, x, y, z, t) {
      super(id, x, y);
      this.z = z;
      this.t = t;
    }
    static defaultLemon() {
      return new Lemon('default', 2, 2, 100, 100);
    }
  }
  class Mango extends Shape {
    constructor(id, x, y, o) {
      super(id, x, y);
      this.o = o;
    }
    static defaultMango() {
      return new Mango('default', 4, 4, 100);
    }
  }
  
console.log(` shape id: ${shape.id}, x :${shape.x}, y: ${shape.y} `);
  let lemon = Lemon.defaultLemon();
  console.log(`Lemon data:`, JSON.stringify(lemon));
  let mango = Mango.defaultMango();
  console.log(`Mango data:`, JSON.stringify(mango));