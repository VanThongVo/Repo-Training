var character = 'thong';
console.log(character);
var inputs = document.querySelectorAll('input');
console.log(inputs);
function flipCoin12() {
    // Meant to be Math.random()
    return Math.random() < 0.5;
}
console.log(flipCoin12());
function greet(person, date) {
    console.log("Hello " + person + ", today is " + date.toDateString() + "!");
}
greet("Maddison", new Date());
function printCoord(pt) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 3, y: 7 });
function compare(a, b) {
    return a === b ? 0 : a > b ? 1 : -1;
}
console.log(compare("23", "2"));
