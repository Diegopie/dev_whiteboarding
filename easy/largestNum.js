// Write a function that takes in a list of numbers and returns the largest number in the list. You cannot use the max function.


const largestNum = (array) => {
  let largest = array[0];
  
  array.forEach(number => {
    if(number > largest) {
      largest = number
    } 
  });

  return largest

}


console.log(largestNum([1,10,5, 15, 20, 100, 40]));


// How would you do this using recursion? 

const largestNumRec = (array, largest = array[0]) => {

 
  if (array[0] === undefined) {
    return largest
  }
  
  if (array[0] > largest) {
    largest = array[0]
  }
  return largestNumRec(array.slice(1), largest)
}

console.log(largestNumRec([1,10,5, 15, 20, 100, 40]));