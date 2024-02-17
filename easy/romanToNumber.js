
// Write a function that takes accepts a Roman Numeral and returns it's equivalent Arabic Number


const romanToNumber = (romanNumeral) => {

  let returnNumber = 0;

  for (let i = 0; i < romanNumeral.length; i++) {
    const character = romanNumeral[i];


    switch (character) {
      case 'I':
        returnNumber += 1;
        break;
      case 'V':
        returnNumber += 5;
        break;
      case 'X':
        returnNumber += 10;
        break;
      case 'L':
        returnNumber += 50;
        break;
      case 'C':
        returnNumber += 100;
        break;
      case 'D':
        returnNumber += 100;
        break;
      case 'M':
        returnNumber += 1000;
        break;

      default:
        break;
    }
  }

  return returnNumber;
}


console.log(romanToNumber('XXX'));