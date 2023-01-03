function findLongestWord(str) {
    if(typeof str === 'string'){
      let arrStr = str.split(' ');
      let wordLength = arrStr[0];
    
      for(let i = 0; i < arrStr.length; i++){
        if(wordLength.length < arrStr[i].length){
          wordLength = arrStr[i];
        }
      }
        return wordLength;
      } else {
        console.log('Це не стрічка');
        return "";
      }
  }
  console.log(findLongestWord('london is the capital of great britain its political economic and cultural centre'));