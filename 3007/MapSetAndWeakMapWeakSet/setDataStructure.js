let s = new Set();
s.add('hello').add('goodbye').add('hello');
console.log(`s.size === 2:`, s.size === 2);
console.log(`s.has("hello"):`, s.has('hello') === true);
for (let key of s.values()) {
  console.log(`Data s:`, key);
}