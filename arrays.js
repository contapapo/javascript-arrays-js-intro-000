var chocolateBars = [
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles"
]

function addElementToBeginningOfArray(array, element){
  return [element, ...array];
}

function destructivelyAddElementToBeginningOfArray(array, element){
   array2 = [element, ...array];
   return array2;
}

// function addElementToEndOfArray(array,element){
//   [...array, element];
// }
