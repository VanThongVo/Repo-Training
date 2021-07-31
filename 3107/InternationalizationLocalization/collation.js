
console.log(`new Intl.Collator().compare('a', 'c' : `,new Intl.Collator().compare('a', 'c'));
console.log(`new Intl.Collator().compare('d', 'c': `,new Intl.Collator().compare('d', 'c'));
console.log(`new Intl.Collator().compare('d', 'd')`,new Intl.Collator().compare('d', 'd'));


// in German,  'ä' sorts with 'a'
// in Swedish, 'ä' sorts after 'z'
let list = ['ä', 'a', 'z'];
let l10nDE = new Intl.Collator('de');
let l10nSV = new Intl.Collator('sv');
console.log(`l10nDE.compare('ä', 'z'):`, l10nDE.compare('ä', 'z'));
console.log(`l10nSV.compare('ä', 'z'):`, l10nSV.compare('ä', 'z'));
console.log(`list.sort(l10nDE.compare):`, list.sort(l10nDE.compare));
console.log(`list.sort(l10nSV.compare):`, list.sort(l10nSV.compare));