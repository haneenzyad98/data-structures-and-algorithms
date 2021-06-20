'use strict';

const repeatedWord = (string) => {
  const lowerCase = string.toLowerCase();
  const wordArray = lowerCase.split(' ');
  const length = wordArray.length;

  for(let i = 0; i < length; i++) {
    for(let k = 0; k < length; k++) {
      if(wordArray[i] === wordArray [k]) {
        return wordArray[i];
      }
    }
  }
}

module.exports=repeatedWord;
