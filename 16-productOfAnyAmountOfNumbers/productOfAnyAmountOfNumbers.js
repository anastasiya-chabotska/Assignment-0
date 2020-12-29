function productOfAnyAmountOfNumbers(...args) {
  var product =1;
  for (var arg of args)
  	product*=arg;
  return product;
}

// Do not edit this line;
module.exports = productOfAnyAmountOfNumbers;