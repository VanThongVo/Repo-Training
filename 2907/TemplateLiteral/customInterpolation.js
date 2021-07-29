let bar = `Vo`;
let baz = 'Van';
let quux = "Thong";
get `http://example.com/foo?bar=${bar + baz}&quux=${quux}`;

function get(arr, param1, param2) {
    console.log(`value params get:`,JSON.stringify(arr), param1, param2);
    let url = `${arr[0]}${param1}${arr[1]}${param2}`;
    console.log(`Values get: `,url);
}