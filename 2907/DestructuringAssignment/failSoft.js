var list = [7, 42];
var [a = 1, b = 2, c = 3, d] = list;
console.log(`Compare a === 7:`, a === 7);
console.log(`Compare b === 42:`, b === 42);
console.log(`Compare c === 3:`, c === 3);
console.log(`Compare d === undefined:`, d === undefined);