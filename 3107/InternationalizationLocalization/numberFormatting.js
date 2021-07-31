let l10n1EN = new Intl.NumberFormat('en-US');
let l10n1DE = new Intl.NumberFormat('de-DE');
console.log(`Compare number format EN:`, l10n1EN.format(1234567.89) === '1,234,567.89');
console.log(`Number format DE:`, l10n1DE.format(1234567.89));