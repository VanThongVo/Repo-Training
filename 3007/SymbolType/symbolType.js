console.log(`Symbol("foo") !== Symbol("foo")`, Symbol("foo") !== Symbol("foo"))

const foo = Symbol();
const bar = Symbol();
console.log(typeof foo, typeof bar)

let obj ={};
obj[foo] = "foo";
obj[bar] = "bar";
console.log(`JSON.stringify(obj):`,JSON.stringify(obj));
console.log(`Object.keys(obj) : `, Object.keys(obj));
console.log(`Object.getOwnPropertyNames(obj) :`, Object.getOwnPropertyNames(obj));
console.log(`Object.getOwnPropertySymbols(obj)`, Object.getOwnPropertySymbols(obj));


