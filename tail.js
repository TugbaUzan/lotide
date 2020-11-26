const assertEqualArray = function(actual, expected) {

  if (actual.length !== expected.length) {
    console.log(`Assertion failed : ${actual} !== ${expected}`);
    return;
  }
  for ( let i=0; i <actual.length; i++) {
     if(actual[i] !== expected [i]) {
      console.log (`Assertion failed : ${actual} !== ${expected});
      return;
    }
     
  }
  console.log(`Assertion passed : ${actual} = ${expected}`);
};

function tail(array) {
  let tailed = [];
  for (i = 1; i < array.length; i++) {
    tailed [i - 1] = array [i];

  }
  return tailed;
}
console.log(tail([5,6,7]));

// TEST CODE
assertEqualArray(tail([5,6,7]), [6,7]);
assertEqualArray(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);

