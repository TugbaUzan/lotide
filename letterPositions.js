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
     console.log("Oh! Sorry! The position is not correct!");
   }
   else{
     console.log("Congratulations! The position is correct!");
   }
}



const letterPositions = function(sentence) {
  const results = {};
  sentence = sentence.replace(' ', '');

  for (let i = 0; i < sentence.length; i++) {
    if (!results[sentence[i]])
      results[sentence[i]] = [i];
    else
      results[sentence[i]].push(i);
  }

  return results;
};

assertEqualArray(letterPositions("hello").e, [1]);
assertEqualArray(letterPositions("hello").h, [2]);
assertEqualArray(letterPositions("lighthouse in the house").i, [1,10]);
