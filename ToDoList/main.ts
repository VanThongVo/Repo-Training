const character = 'thong';
console.log(character);
const inputs = document.querySelectorAll('input');
console.log(inputs);

function flipCoin12() {
    // Meant to be Math.random()
    return Math.random() < 0.5;
}  
console.log(flipCoin12());
function greet(person: string, date: Date) {
    console.log(`Hello ${person}, today is ${date.toDateString()}!`);
  }
  
  greet("Maddison", new Date());

  function printCoord(pt : { x: number; y: number }) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
  }
  printCoord({ x: 3, y: 7 });

  function compare(a: string, b: string): -1 | 0 | 1 {
    return a === b ? 0 : a > b ? 1 : -1;
  }
  console.log(compare("23","2"));