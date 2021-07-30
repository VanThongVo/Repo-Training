class Clz {
    * dad() {
        console.log("Hello thong");
    }
};

let Obj = {
    * foo() {
        console.log("world")
        yield 1;
        console.log('Bye foo');
        yield 2;
        return "finish!";
    }
}
let clz =  new Clz();
console.log(`Clz bar:`,clz.dad().next());
let obj0 = Obj.foo();
console.log(`Obj.foo:`, JSON.stringify(obj0.next()));
console.log(`Obj.foo:`, JSON.stringify(obj0.next()));
console.log(`Obj.foo:`, JSON.stringify(obj0.next()));