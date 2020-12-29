function setUnionOfAnyAmountOfSets(...args) {
  var mySet = new Set();
  for (var arg of args){
  	arg.forEach(num => mySet.add(num));
  }

  return mySet;
}

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;