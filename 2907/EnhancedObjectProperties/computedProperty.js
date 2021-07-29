let fun = () => `foo`;
let obj1 ={
    foo : "bar",
    ["bar" + fun()] : 42
}

console.log(obj1)