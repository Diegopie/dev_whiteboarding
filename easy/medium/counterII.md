# Counter

Write a function `createCounter`. It should accept an initial integer `init`. It should return an object with three functions

The three functions are:

* `increment()` increases the current value by 1 and then returns it.
  
* `decrement()` reduces the current value by 1 and then returns it.
  
* `reset()` sets the current value to init and then returns it

## Example 1

```js
const counter = createCounter(5);
counter.increment(); // 6
counter.reset(); // 5
counter.decrement(); // 4
```

## Example 2

```js
const counter = createCounter(0);
counter.increment(); // 1
counter.increment(); // 2
counter.decrement(); // 1
counter.reset(); // 0
counter.reset(); // 0
```

## Part 2

Once they have a solution, ask them to refactor this as a class