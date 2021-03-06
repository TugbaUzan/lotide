const assertEqual = require('./assertEqual')

const findKey = function (object, callback) {
  for (let item of Object.keys(object)) {
    if (callback(object[item]) === true)
    return item;
  }
}
console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2));