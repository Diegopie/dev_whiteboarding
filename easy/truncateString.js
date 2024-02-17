const truncate = (string) => {

  let newString = string[0]; 

  for(let i = 0; i < string.length; i++) {
    console.log(string[i]);
    if (newString[newString.length - 1] !== string[i]) {
      console.log('hit');
      newString += string[i];
    }

  }

  return newString

}

console.log(truncate('aaabbbccc'));