var params = ["hello", true, 7];
var other = [1,2,...params]; 
function f(x, y,...a) {
    return (x + y) * a.length;
}
console.log(`f(1,2,...params) === 9`, f(1,2,...params) === 9);
console.log(`Array other: `, JSON.stringify(other));

var str = "foo"
var chars = [...str]
console.log(`Array chars: `, JSON.stringify(chars));
