var list = ["t", "h", "o"];
var [a, , b] = list;
console.log(`a = ` ,a);
console.log(`b = `, b);
[b,a] = [a,b];
console.log(`a = ` ,a);
console.log(`b = `, b);