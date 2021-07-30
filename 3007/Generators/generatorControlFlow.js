// // synchronous timeout function
// // genAsync is a generator object in global scope
// // genAsync.next in this function keeps the tasks to run till completed
// function timeoutFunc(order) {
//     var random = Math.random();
//     setTimeout(function(){
//         genAsync.next(random + order);
//     }, random * 3000);
// }
 
// // The generator function runing the asynchronous function in series, one after another
// function* runTimeoutFuncAsync() {
//     var random1 = yield timeoutFunc(1); console.log(random1);
//     var random2 = yield timeoutFunc(2); console.log(random2);
//     var random3 = yield timeoutFunc(3); console.log(random3);
// }
// var genAsync = runTimeoutFuncAsync();
// genAsync.next(); // kick off the tasks
//  generic asynchronous control-flow driver
function async(proc, ...params) {
    var iterator = proc(...params);
    return new Promise((resolve, reject) => {
      let loop = (value) => {
        let result;
        try {
          result = iterator.next(value);
        } catch (err) {
          reject(err);
        }
        if (result.done)
          resolve(result.value);
        else if (typeof result.value === 'object' &&
          typeof result.value.then === 'function')
          result.value.then((value) => {
            loop(value);
          }, (err) => {
            reject(err);
          });
        else
          loop(result.value);
      }
      loop();
    });
  }
  
  //  application-specific asynchronous builder
  function makeAsync(text, after) {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(text), after);
    });
  }
  
  //  application-specific asynchronous procedure
  async(function*(greeting) {
    let foo = yield makeAsync('foo', 300)
    let bar = yield makeAsync('bar', 600)
    let baz = yield makeAsync('baz', 100)
    return `${greeting} ${foo} ${bar} ${baz}`
  }, 'Hello').then((msg) => {
    console.log(`Result:`, msg);
  })