const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`Assertion passed : ${actual} = ${expected}`);
  }
  else if (actual !== expected) {
    console.log(`Assertion failed : ${actual} != ${expected}`);

  }

};
const countLetters = function(string) {
  let result = {};
  for (const letter of string.split('')) {
    result[letter] = 0;
  }
  for (const key in result) {
    for (const letter of string.split('')) {
      if (key === letter) {
        result[key]++;
      }
    }
  }
  return result;
};



console.log(countLetters('countletters'));

