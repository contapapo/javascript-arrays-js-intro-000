var chocolateBars = [
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles"
]

function addElementToBeginningOfArray(array,element){
  [element, ...array];
}

function destructivelyAddElementToBeginningOfArray(array,element){
  const array = [element, ...array];
}
