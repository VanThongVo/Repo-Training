console.log(`Symbol.for("app.foo") === Symbol.for("app.foo")`, Symbol.for("app.foo") === Symbol.for("app.foo"))

const foo1 = Symbol.for("app.foo")
const bar1 = Symbol.for("app.bar")
console.log(`typeof foo1 === "symbol"`,typeof foo1 === "symbol")

console.log(`typeof bar1 === "symbol"`, typeof bar1 === "symbol")

let obj1 ={};
obj1[foo1] = "foo";
obj1[bar1] = "bar";
console.log(`JSON.stringify(obj):`,JSON.stringify(obj1));
console.log(`Object.keys(obj) : `, Object.keys(obj1));
console.log(`Object.getOwnPropertyNames(obj) :`, Object.getOwnPropertyNames(obj1));
console.log(`Object.getOwnPropertySymbols(obj)`, Object.getOwnPropertySymbols(obj1));
