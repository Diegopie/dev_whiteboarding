// https://www.codewars.com/kata/57f5e7bd60d0a0cfd900032d


// The following was a question that I received during a technical interview for an entry level software developer position. I thought I'd post it here so that everyone could give it a go:

// You are given an unsorted array containing all the integers from 0 to 100 inclusively. However, one number is missing. Write a function to find and return this number. What are the time and space complexities of your solution?


function missingNo(nums) {
    let totalSum = (100 * (100 + 1)) / 2
    let numSum = nums.reduce((a, c) => a + c)
    
    return totalSum - numSum
  }