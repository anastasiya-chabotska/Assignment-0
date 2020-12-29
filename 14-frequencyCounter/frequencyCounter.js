function frequencyCounter(word) {
  var letters = new Object();
  for (var i=0; i<word.length; i++){
  	if (word.charAt(i) in letters)
  		letters[word.charAt(i)]++;
  	else letters[word.charAt(i)]=1;
  }

  return letters;
}

// Do not edit this line;
module.exports = frequencyCounter;