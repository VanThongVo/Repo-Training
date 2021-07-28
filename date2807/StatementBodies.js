{
let nums = new Array(30,5, 10, 3, 20, 40, 12, 4, 7, 100);
let fives = new Array();

nums.forEach( 
    v => 
    {
        if (v % 5 === 0)
        fives.push(v);
    });

console.log(`Array fives: `, fives);
}