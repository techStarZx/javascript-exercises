const palindromes = function (str) {
    let strWithOutPunctuationSpace = str.replace(/\W/g, '');
    let strWithOutPunctuationSpaceReversed = strWithOutPunctuationSpace.split('').reverse().join('');
    return strWithOutPunctuationSpace.toLowerCase() == strWithOutPunctuationSpaceReversed.toLowerCase();
};

// Do not edit below this line
module.exports = palindromes;
