function fizzBuzz(start, end) {
	var arr= new Array(end-start+1);

	for (var i=0; i<arr.length; i++){
  
  	if (start%3==0 && start%5==0)
  		arr[i]="FizzBuzz";
  	else if (start%3==0)
  		arr[i]="Fizz";
  	else if (start%5==0)
  		arr[i]="Buzz";
  	else arr[i]=start;
start++;

}
 return arr;
}

// Do not edit this line;
module.exports = fizzBuzz;