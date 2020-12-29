function sumOfMinimumAndMaximum(nums) {
  
  var max=0;
  var min=nums[0];
  for (var i=0; i<nums.length; i++){
  	if (nums[i]>max)
  		max=nums[i];
  	else if (nums[i]<min)
  		min=nums[i];

  }
  return min+max;
}

// Do not edit this line;
module.exports = sumOfMinimumAndMaximum;