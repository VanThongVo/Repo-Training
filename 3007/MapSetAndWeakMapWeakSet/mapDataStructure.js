let m = new Map();
let q = Symbol();
m.set("hello", 42);
m.set(q, 34);
console.log(`m.size :`,m.size);
console.log(`m.get(s) === 34:`, m.get(q) === 34);
for (let [key,val] of m.entries()) {
    console.log(`key:`, key, ` - val:`, val)
}
