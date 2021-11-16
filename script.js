function compute()
{
	// From old code;
    // p = document.getElementById("principal").value;
	
	// Get the principal valuce.
    var principal = document.getElementById("principal").value;
	
	// Get the rate value.
	var rate = document.getElementById("rate").value
	
	// Get the years value.
	var years = document.getElementById("years").value;
	
	// Calculate inteterest:
	var interest = principal * years * rate /100;
	// Logic to convert the 'No of Years' into the actual year in the future.
	var year = new Date().getFullYear()+parseInt(years);
	
	// Patch for output.
	var amount = interest
	
	// Output
	document.getElementById("result").innerHTML="If you deposit "+principal+",\<br\>at an interest rate of "+rate+"%\<br\>You will receive an amount of "+amount+",\<br\>in the year "+year+"\<br\>"
}

function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval+"%";	
}