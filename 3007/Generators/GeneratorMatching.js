let fibonacci3 = function* (numbers) {
    let pre = 0, cur = 1
    while (numbers--> 0) {
        [ pre, cur ] = [ cur, pre + cur ]
        yield cur
    }
}
for (let n of fibonacci3(5)){

    console.log(n)
}
let numbers = [...fibonacci3(10)];
console.log(`Value numbers:`, JSON.stringify(numbers));
let [n1, n2, n3, ...others] = fibonacci3(10);
console.log(`Values n1, n2, n3, others:`, n1, n2, n3, others);