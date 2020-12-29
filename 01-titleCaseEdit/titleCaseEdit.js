function titleCaseEdit(title) {
  var arr = title.split(" ");
  
  for (var i=0; i<arr.length; i++){
  	arr[i]=arr[i].charAt(0).toUpperCase()+arr[i].substring(1);
  }
  capTitle = arr.join(" ");
  return capTitle;
}

// Do not edit this line;
module.exports = titleCaseEdit;