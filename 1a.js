const countries = [
  "ALBANIA",
  "BOLIVIA",
  "CANADA",
  "DENMARK",
  "ETHIOPIA",
  "FINLAND",
  "GERMANY",
  "HUNGARY",
  "IRELAND",
  "JAPAN",
  "KENYA",
];

//createArrayOfArrays

function makeList(countriesArray) {
  const arrResult = [];
  for (let i = 0; i < countriesArray.length; i++) {
    let items = countriesArray[i].toLowerCase();

    arrResult.push([
      items.charAt(0).toUpperCase() + items.slice(1),
      items.substring(0, 3).toUpperCase(),
      items.length,
    ]);
  }
  return console.log(arrResult);
}

makeList(countries);
