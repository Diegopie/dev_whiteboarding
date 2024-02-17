# Challenge: Find Missing Number in Array

## Problem Statement

Write a function in JavaScript that takes an array of unique integers from 1 to n (inclusive) and returns the missing number in the sequence. The array is sorted in ascending order.

For example, given an array `[1, 2, 3, 5]`, the missing number is `4`.

Your function should return the missing number.

## Function Signature

```javascript
function findMissingNumber(nums) {
    // Your code here
}
```

## Input

* `nums`: An array of unique integers from 1 to n (inclusive).

## Output

* The missing number in the sequence.
  
## Example

```javascript
console.log(findMissingNumber([1, 2, 3, 5])); // Output: 4
console.log(findMissingNumber([1, 3, 4, 5])); // Output: 2
console.log(findMissingNumber([2, 3, 4, 5])); // Output: 1
console.log(findMissingNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 11])); // Output: 10
```

## Constraints

* The array will contain at least one element.
* The elements in the array will be unique integers.
* The array will be sorted in ascending order.
* The length of the array will not exceed 1000 elements.
  
Feel free to extend this challenge by adding additional functionalities or constraints as needed!

## Possible Solutions

### Using Reduce 🤮

```javascript
function findMissingNumber(nums) {
    let n = nums.length + 1; // Since one number is missing, the array size should be n + 1
    let expectedSum = (n * (n + 1)) / 2; // Sum of integers from 1 to n
    let actualSum = nums.reduce((acc, curr) => acc + curr, 0); // Sum of numbers in the array
    return expectedSum - actualSum; // The missing number is the difference between expected and actual sums
}
```

### Using Maths

``` javascript
function findMissingNumber(nums) {
    let n = nums.length + 1; // Since one number is missing, the array size should be n + 1
    let expectedSum = (n * (n + 1)) / 2; // Sum of integers from 1 to n
    
    let actualSum = 0;
    for (let i = 0; i < nums.length; i++) {
        actualSum += nums[i];
    }
    
    return expectedSum - actualSum; // The missing number is the difference between expected and actual sums
}
```

### Using Set

``` javascript
function findMissingNumber(nums) {
    const numSet = new Set(nums);
    const n = nums.length + 1; // Since one number is missing, the array size should be n + 1

    for (let i = 1; i <= n; i++) {
        if (!numSet.has(i)) {
            return i; // If the current number is not in the set, it's the missing number
        }
    }
    return -1; // Indicates no missing number found (this should not happen for this problem)
}
```