# Challenge: Implement a Queue Data Structure

## Problem Statement

Create a Queue data structure in JavaScript. A Queue is a linear data structure that follows the FIFO (First In First Out) principle. Your Queue should support the following operations:

enqueue(item): Add an item to the end of the queue.
dequeue(): Remove and return the item at the front of the queue.
peek(): Return the item at the front of the queue without removing it.
isEmpty(): Return true if the queue is empty, false otherwise.
size(): Return the number of items in the queue.
You must implement the Queue using JavaScript classes.

### Example

```javascript
Copy code
const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
console.log(queue.size()); // Output: 3
console.log(queue.peek()); // Output: 10
console.log(queue.dequeue()); // Output: 10
console.log(queue.isEmpty()); // Output: false
console.log(queue.size()); // Output: 2
```

## Constraints

You may assume that the input will be valid.
The size of the queue will not exceed 1000 items.
Feel free to extend this challenge by adding additional functionalities or constraints as needed!