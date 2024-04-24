const palindromes = function (orgInput) {
    const regex = /[-.\s*+\/:_,?!^${}()|[\]\\]/g;
    let newStr = orgInput.replace(regex, '');
    const compString = newStr.split('').reverse().join('');
    const str1 = newStr.toUpperCase();
    const str2 = compString.toUpperCase();

    if (str1 === str2) {
      return true;
    }
    else {
      return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
