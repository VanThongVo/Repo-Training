var dest = {quu : 0};
var src1 = { foo: 1, bar : 2};
var src2 = { foo: 3, bar : 4};
Object.assign(dest, src1, src2)
console.log(`dest.quu === 0`, dest.quu === 0)
console.log(`dest.foo === 3`, dest.foo === 3)
console.log(`dest.bar === 2`, dest.bar === 2)
console.log(`dest.bar === 4`, dest.bar === 4)

