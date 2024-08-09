const palindromes = function (str) {
  str = str.replace(/[^\w]+/g, "");
  str = str.toLowerCase();
  console.log(str);
  let j = str.length - 1;
  let i = 0;
  for(; i < str.length && j >= 0; i++, j--){
    if(str.charAt(i) != str.charAt(j)) return false;
  }
  return true;
};

// Do not edit below this line
module.exports = palindromes;
