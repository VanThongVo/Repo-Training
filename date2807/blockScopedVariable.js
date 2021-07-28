let a =  new Array('a',"b", "c");
let b = new Array('d','e', "f");

let x = new Array (1, 2)
let y = new Array ("3","4")

for (let i = 0; i < a.length; i++)
{
    let x = a[i];
    console.log(`Value x[${i}]:` , x);

}

for (let i = 0; i < b.length; i++)
{
    let y = b[i];
    console.log(`Value x[${i}]:` , y);

}

console.log(`Array x: `, JSON.stringify(x));
console.log(`Array y: `,JSON.stringify(y));

let callbacks = [];
for (let i = 0; i <= 2; i++)
{
    callbacks[i] = function()
    {
        return i * 2;
    }
}
console.log(`Compare callback[0] === 0`, callbacks[0]() === 0 );
console.log(`Compare callback[1] === 2`, callbacks[1]() === 2 );
console.log(`Compare callback[2] === 4`, callbacks[2]() === 4 );

