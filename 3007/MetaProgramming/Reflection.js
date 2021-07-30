let objr = {
    a: 1
  };
  Object.defineProperty(objr, "b", {
    value: 2
  });
  objr[Symbol("c")] = 3;
  console.log(`Reflect.ownKeys(obj):`, Reflect.ownKeys(objr));