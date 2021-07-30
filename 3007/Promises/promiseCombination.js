let fetchPromised = (name, timeout) =>
{
    return new Promise((resolve, reject) => 
    {
        setTimeout( () => resolve (`Hello ${name}`), timeout)
    })
}
Promise.all([
    fetchPromised(`vo`, 1000),
    fetchPromised(`van`,500),
    fetchPromised(`thong`, 100)
])
.then((data) => 
{
    let[vo,van,thong] = data
    console.log(`Promises all: ${vo} ${van} ${thong}`)
}),(err) => {
    console.log(`Error: ${err}`)
}
