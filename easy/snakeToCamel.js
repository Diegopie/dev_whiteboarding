// Python programmers write variable names in snake case, where each word is lowercase and joined by underscores. For example, if you were to write “very hungry caterpillar” in snake case, you’d write very_hungry_caterpillar.

// JavaScript programmers write variable names in camel case, where the initial word is lowercase and other words are capitalized. For example, if you were to write “very hungry caterpillar” in camel case you’d write veryHungryCaterpillar.

// Write a function that converts a string in snake case to a string in camel case.

const snakeToCamel = (string) => {
  let jsString = '';

  for (let i = 0; i < string.length; i++) {
    if (string[i] !== '_') {
      jsString += string[i]
    } else {

      jsString += string[i + 1].toUpperCase();

      i++
    }

  }
  return jsString
}

console.log(snakeToCamel('my_var_is_this'));