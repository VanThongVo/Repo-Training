function f (x, y, ...a) {
    return (x + y) * a.length; 
}
console.log(`f(1,2,"Hello", true,7) === 9`,f(1,2,"Hello", true,7) === 9)