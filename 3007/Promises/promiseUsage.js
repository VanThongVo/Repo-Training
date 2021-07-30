function msgAfterTimeout (msg, who, timeout) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${msg} Hello ${who}!`, timeout))
    })
        
}
msgAfterTimeout("Morning,", "Thong", 100)
.then((msg)=>
    msgAfterTimeout(msg, "Vo",200)
)
.then((msg) =>
{
    console.log(`done after 300ms : ${msg}`);
})