const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`Assertion passed : ${actual} = ${expected}`);
  } else if (actual !== expected) {
    console.log(`Assertion failed : ${actual} != ${expected}`);

  }

}
function eqArrays(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
}

function assertEqualArray(array1, array2){
  result = eqArrays(array1,array2);
   if(!result){
     console.log("Oh! Sorry! There was an issue");
   }
   else{
     console.log("Conguratulation! The orginal");
   }
}
assertEqualArray([1,2,3],[1,2,3]);

