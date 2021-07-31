let DTEN = new Intl.DateTimeFormat('en-US');
let DTDE = new Intl.DateTimeFormat('de-DE');
console.log(`Compare date format EN:`, DTEN.format(new Date('2017-01-02')) === '1/2/2017');
console.log(`Date format DE:`, DTDE.format(new Date('2017-01-02')));