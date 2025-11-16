const countriesISO = {
  "ae": "united arab emirates",
  "ar": "argentina",
  "at": "austria",
  "au": "australia",
  "be": "belgium",
  "bg": "bulgaria",
  "br": "brazil",
  "ca": "canada",
  "ch": "switzerland",
  "cn": "china",
  "co": "colombia",
  "cz": "czech republic",
  "de": "germany",
  "eg": "egypt",
  "fr": "france",
  "gb": "united kingdom",
  "gr": "greece",
  "hk": "hong kong",
  "hu": "hungary",
  "id": "indonesia",
  "ie": "ireland",
  "il": "israel",
  "in": "india",
  "it": "italy",
  "jp": "japan",
  "kr": "south korea",
  "lt": "lithuania",
  "lv": "latvia",
  "ma": "morocco",
  "mx": "mexico",
  "my": "malaysia",
  "ng": "nigeria",
  "nl": "netherlands",
  "no": "norway",
  "nz": "new zealand",
  "ph": "philippines",
  "pl": "poland",
  "pt": "portugal",
  "ro": "romania",
  "rs": "serbia",
  "ru": "russia",
  "sa": "saudi arabia",
  "se": "sweden",
  "sg": "singapore",
  "si": "slovenia",
  "sk": "slovakia",
  "th": "thailand",
  "tr": "turkey",
  "tw": "taiwan",
  "ua": "ukraine",
  "us": "united states",
  "ve": "venezuela",
  "za": "south africa"
};

const twoletterISO = [
  "ae","ar","at","au","be","bg","br","ca","ch","cn","co","cz",
  "de","eg","fr","gb","gr","hk","hu","id","ie","il","in","it",
  "jp","kr","lt","lv","ma","mx","my","ng","nl","no","nz","ph",
  "pl","pt","ro","rs","ru","sa","se","sg","sk","th","tr","tw",
  "ua","us","ve","za"
];

let Countries = [];

twoletterISO.forEach(code => {
  let obj = {
    iso_2_alpha: code,
    png: `https://flagcdn.com/32x24/${code}.png`,
    countryName: getCountryName(code),
  };
  Countries.push(obj);
});

function getCountryName(countryCode) {
  if (countriesISO.hasOwnProperty(countryCode)) {
    return countriesISO[countryCode]; // FIXED
  } else {
    return countryCode;
  }
}

console.log(Countries);

export default Countries;
