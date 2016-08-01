function generatePassword(inputPhrase, forceNumber, forceSpecial) {
  // N O T E S
  //Turn off number conversion with forceNumber = 0
  //Turn on once number conversion with forceNumber = 1 
  //Turn on for all number conversion with forceNumber = -1 
  //
  //Turn off special character conversion with forceNumber = 0
  //Turn on once special character conversion with forceNumber = 1 
  //Turn on for all special character conversion with forceNumber = -1   
  //
  
  // T E S T  V A L U E S
  //var inputPhrase = "Debug test phrase to make input string" //debug values
  //var forceSpecial = -1; //debug values
  var phraseWords = inputPhrase.split(' ');
  var outputPassword = phraseWords[0].charAt(0);
  
  for (var i = 1; i < phraseWords.length; i++) {
    var phraseWordsArray = replaceChar(phraseWords[i], forceSpecial, getReplaceCharArray);
    if (phraseWordsArray[1] == "found"){
      phraseWords[i] = phraseWordsArray[0][0];
      var forceSpecial = 0;
    };
    if (phraseWordsArray[1] == "continue"){
      phraseWords[i] = phraseWordsArray[0][0];
      var forceSpecial = -1;
    };
    if (isNumber(phraseWords[i])) {
        var outputPassword = outputPassword + phraseWords[i];
        } else {
          var phraseWordsArray = replaceChar(phraseWords[i], forceNumber, getReplaceNumArray);
          if (phraseWordsArray[1] == "found"){
            phraseWords[i] = phraseWordsArray[0][0];
            var forceNumber = 0;
          };
          if (phraseWordsArray[1] == "continue"){
            phraseWords[i] = phraseWordsArray[0][0];
            var forceNumber = -1;
          };
        var outputPassword = outputPassword + phraseWords[i].charAt(0);
  }
}
  return outputPassword;
}

function replaceChar(inputValue, forceSpecial,replaceArray){
  
  var output = [];
  var replacementMap = replaceArray();
  for (var ii = 0; ii < replacementMap.length; ii++) {
    for (var jj = 1; jj < replacementMap[ii].length; jj++) {
      if (inputValue.indexOf(replacementMap[ii][jj]) == 0) {
        var inputValue = replacementMap[ii][0];
        if (forceSpecial == 1){
          var foundSpecialFlag = "found";
          var output = [[inputValue],[foundSpecialFlag]];
          return output;
        };
        if (forceSpecial == -1){
          var foundSpecialFlag = "continue";
          var output = [[inputValue],[foundSpecialFlag]];
          return output;
          };
      };
    }
  }
  var output = [[inputValue],[foundSpecialFlag]];
  return output;
}
function getReplaceNumArray(){
  var replacementNumArray = [["0","o","O"],
                            ["1","l","L"],
                            ["2","z", "Z"],
                            ["3","e", "E"],
                            ["4","a", "A"],
                            ["5","s", "S"],
                            ["6", "b"],
                            ["7","T"],
                            ["8", "B"],
                            ["9","p", "P"]];
  return replacementNumArray;
}
function getReplaceCharArray(){
var replacementCharArray = [[" ", "space", "empty", "void", "null"],
                            ["!", "i", "I", "not"],
                            ['"', "quote", "inch"],
                            ['#', "H",'hash', 'number', 'pound'],
                            ["$", "s", "dollar", "money", "cash"],
                            ["%", "percent"],
                            ["&", "B", "and", "with", "together"],
                            ["'", "feet", "tick"],
                            ["(", "c", "C", "moon"],
                            [")", "D"],
                            ["*", "all", "star"],
                            ["+", "t", "plus", "t"],
                            [",", "comma"],
                            ["-", "dash", "minus"],
                            [".", "dot", "period"],
                            ["/", "slash", "per"],
                            [":", "colon", "eyes", "look"],
                            [";", "semi", "wink"],
                            ["<", "k", "K", "less", "left"],
                            ["=", "E", "is", "equal"],
                            [">", "greater", "more", "right"],
                            ["?", "what", "question"],
                            ["@", "a", "at"],
                            ["^", "up", "hat"],
                            ["_", "under", "down"],
                            ["`"],
                            ["{", "back", "away"],
                            ["|", "pipe"],
                            ["}", "face", "forward"],
                            ["~", "almost", "about", "wave"]];
return replacementCharArray;
}

function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}