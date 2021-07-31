const sentence = 'The quick brown fox jumps over the lazy dog.';

const word = 'fox';

console.log(`The word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence`);

console.log(`'hello'.startsWith('e', 1):`, 'hello'.startsWith('e', 1));
console.log(`'hello'.endsWith('ell', 4):`, 'hello'.endsWith('ell'));
console.log(`'hello'.includes('ell'):`, 'hello'.includes('ell'));
console.log(`'hello'.includes('ell', 1):`, 'hello'.includes('ell', 1));
console.log(`'hello'.includes('ell', 2):`, 'hello'.includes('ell', 2));

// var str = "Hello world, welcome to the universe.";
// console.log(`str.startsWith("world")`,str.startsWith("world",5))