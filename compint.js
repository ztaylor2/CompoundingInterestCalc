var finalVal = function () {
	var p = parseFloat(document.getElementById("principle").value);
	var r = parseFloat(document.getElementById("rate").value);
	var t = parseFloat(document.getElementById("years").value);
	var n = parseFloat(document.getElementById("period").value);
	var out = document.getElementById("final");

//add commas to output
function numberWithCommas(x) {
		var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
}

//make sure inputs are numbers
if (isNaN(p) || isNaN(r) || isNaN(t))                         
	{
	out.textContent = "Invalid input, enter numbers only."
	}
//execute compounding interest equation
else {
		var A = p*(1+(r/100)/n)**(t*n);
	out.textContent =  "$" + numberWithCommas(A.toFixed(2));
	}
}
