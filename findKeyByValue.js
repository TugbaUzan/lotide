const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`Assertion passed : ${actual} = ${expected}`);
  } else if (actual !== expected) {
    console.log(`Assertion failed : ${actual} != ${expected}`);

  }

};
const findKeyByValue = function(object, value) {
  for (let key in object) {
    if (object[key] === value)
      return key;
  }
  return undefined;
};

module.exports = findKeyByValue;
const bestTvShowsByGenre ={ 
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTvShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTvShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTvShowsByGenre, "The Expanse"), "sciFi");
assertEqual(findKeyByValue(bestTvShowsByGenre, "Breaking Bad"), undefined);