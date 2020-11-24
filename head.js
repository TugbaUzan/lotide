const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`Assertion passed : ${actual} = ${expected}`);
  } else if (actual !== expected) {
    console.log(`Assertion failed : ${actual} != ${expected}`);

  }
 
};

function head(array) {
  if (array === null) {
    return undefined;
  }
  return array[0];
}


// TEST CODE
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]), undefined);
assertEqual(head([null]), null);
assertEqual(head(null), null);
