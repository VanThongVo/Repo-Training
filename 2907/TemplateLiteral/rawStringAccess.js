f `foo\n${42}bar`

function f (string, ...values) {

    console.log(string[0]);
    console.log(string.raw[0]);
    console.log(values[0]);
}
console.log(String.raw`foo\n${42}bar`)