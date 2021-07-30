let isMarked = new WeakSet();
let attachedData = new WeakMap();

class Node {
  constructor(id) {
    this.id = id;
  }
  mark() {
    isMarked.add(this);
  }
  unmark() {
    isMarked.delete(this);
  }
  marked() {
    return isMarked.has(this);
  }
  set data(data) {
    attachedData.set(this, data);
  }
  get data() {
    return attachedData.get(this);
  }
}

let vo = new Node('VO');
console.log(`Value vo: `, vo);
vo.data = "van";
vo.mark();
console.log(`vo isMarked: `, isMarked.has(vo));
console.log(`attachedData vo :`,attachedData.get(vo), attachedData.has(vo))
vo = null;
console.log(`vo isMarked: `, isMarked.has(vo));
console.log(`attachedData vo :`,attachedData.get(vo), attachedData.has(vo))