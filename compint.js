var finalVal = function () {
	var p = parseFloat(document.getElementById("principle").value);
	var r = parseFloat(document.getElementById("rate").value);
	var t = parseFloat(document.getElementById("years").value);
	var n = parseFloat(document.getElementById("period").value);
	var out = document.getElementById("final");
	
//make sure inputs are numbers
if (isNaN(p) || isNaN(r) || isNaN(t))                         
	{
	out.textContent = "Invalid input, enter numbers only."
	}
else {
		var A = p*(1+(r/100)/n)**(t*n);                       //execute compounding interest equation
	out.textContent =  "$" + A.toFixed(2);                    //round answer to two decimal places and print 
	}

}
