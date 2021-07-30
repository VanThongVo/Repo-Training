function * range ( start, end, step) {
    while(start < end) {
        yield start;
        start += step;
    }

}
for ( let i  of range( 1, 20, 3)) {
    console.log (`i = `, i);
}