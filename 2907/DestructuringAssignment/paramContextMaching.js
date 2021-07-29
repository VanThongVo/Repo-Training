function o([name, val]){
    console.log(`name: ${name}, val = ${val}`);
};

function i({name: n, val: v})
{
    console.log(n, v);
};

function s({name, val}) {
    console.log(name, val);
};

o(["bar",42]);
i({name: "foo", val: 7});
s({name: "bar", val: 42});