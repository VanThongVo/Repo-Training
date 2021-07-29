var objM = {a: 1};
var list = [1];
var {a, b = 2} = objM;
var [x, y = 2] = list;

console.log(`a = `,a);
console.log(`b = `,b);

console.log(`x = `,x);
console.log(`y = `,y);
