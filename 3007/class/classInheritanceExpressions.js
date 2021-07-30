var aggregation = (baseClass, ...mixins) => {
    let base = class _Combined extends baseClass {
        constructor (...args) {
            super(...args)
            mixins.forEach((mixin) => {
                mixin.prototype.initializer.call(this)
            })
        }
    }
    let copyProps = (target, source) => {
        Object.getOwnPropertyNames(source)
            .concat(Object.getOwnPropertySymbols(source))
            .forEach((prop) => {
            if (prop.match(/^(?:constructor|prototype|arguments|caller|name|bind|call|apply|toString|length)$/))
                return
            Object.defineProperty(target, prop, Object.getOwnPropertyDescriptor(source, prop))
        })
    }
    mixins.forEach((mixin) => {
        copyProps(base.prototype, mixin.prototype)
        copyProps(base, mixin)
    })
    return base
}
  class Colored {
    initializer() {
      this._color = 'white';
    }
    get color() {
      return this._color;
    }
    set color(v) {
      this._color = v;
    }
  }
  
  class ZCoord {
    initializer() {
      this._z = 0;
    }
    get z() {
      return this._z;
    }
    set z(v) {
      this._z = v;
    }
  }
  
  class Shape1 {
    constructor(x, y) {
      this._x = x;
      this._y = y;
    }
    get x() {
      return this._x;
    }
    set x(v) {
      this._x = v;
    }
    get y() {
      return this._y;
    }
    set y(v) {
      this._y = v;
    }
  }
  
  class Rectangle1 extends aggregation(Shape1, Colored, ZCoord) {}
  
  var rect = new Rectangle1(7, 42);
  rect.z = 1000;
  rect.color = 'red';
  console.log(`Rectangle data:
    pos x: ${rect.x}
    pos y: ${rect.y}
    pos z: ${rect.z}
    color: ${rect.color}`);