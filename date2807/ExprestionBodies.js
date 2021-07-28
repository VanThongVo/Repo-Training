let evens = new Array(1, 2, 3);
let odds = evens.map(v => v + 1);
let pairs = evens.map(v => ({
    even: v,
    odd : v + 1
}));
let nums = evens.map((v, i) => v + i);
console.log(`Array odd: `, JSON.stringify(odds));
console.log(`Array pairs: `, JSON.stringify(pairs));
console.log(`Array nums: `, nums);
