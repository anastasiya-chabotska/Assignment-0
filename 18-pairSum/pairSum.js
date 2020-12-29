function pairSum(nums, target) {
	if (nums.length<=1)
		throw "Error";
	
  for (var j=0; j<nums.length; j++){
  var lookFor=target-nums[j];
  for (var i=j+1; i<nums.length; i++){
    if (nums[i]===lookFor)
    return true;

  }
  }
  return false;
}
// Do not edit this line;
module.exports = pairSum;