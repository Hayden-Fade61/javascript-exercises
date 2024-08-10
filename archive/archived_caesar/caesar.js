const caesar = function(msg, shift) {
  let characters = /["a-zA-Z"]/;
  let encrypted = "";
  for(let i = 0; i < msg.length; i++){
    let currentChar = msg.charAt(i);
    if(characters.test(currentChar)){
      encrypted += doShift(currentChar, shift);
    }
    else{
      encrypted += currentChar;
    }
  }
  return encrypted;
};

function doShift(char, shift){
  const LOWERCASE_MIN = "a".charCodeAt(0);
  const LOWERCASE_MAX = "z".charCodeAt(0);
  const ALPHABET_LENGTH = 26;
  const EFFECTIVE_SHIFT = shift % ALPHABET_LENGTH;
  const isUppercase = char == char.toUpperCase();
  let charPos = char.toLowerCase().charCodeAt(0) - LOWERCASE_MIN;
  let shiftedPos = (charPos + EFFECTIVE_SHIFT) % ALPHABET_LENGTH;
  let shiftedChar = '';
  shiftedChar = String.fromCharCode(LOWERCASE_MIN + shiftedPos);
  return isUppercase ? shiftedChar.toUpperCase() : shiftedChar;
}

// Do not edit below this line
module.exports = caesar;
