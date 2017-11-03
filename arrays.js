var chocolateBars = [
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles"
]

function addElementToBeginningOfArray(za, elemento){
  [elemento, ...za];
}

function destructivelyAddElementToBeginningOfArray(za,elemento){
  var array = [element, ...array];
}

// function addElementToEndOfArray(array,element){
//   [...array, element];
// }
