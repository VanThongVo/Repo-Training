let l10nUSD = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });
  let l10nGBP = new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP'
  });
  let l10nEUR = new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR'
  });
  console.log(`Compare currency format USD:`, l10nUSD.format(100200300.40) === '$100,200,300.40');
  console.log(`Currency format GBP:`, l10nGBP.format(100200300.40));
  console.log(`Currency format EUR:`, l10nEUR.format(100200300.40));