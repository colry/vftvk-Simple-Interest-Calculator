function compute()
{
	// From old code;
    // p = document.getElementById("principal").value;
	// Get the principal valuce.
	var principal = document.getElementById("principal").value;
	
	if (principal <= 0) {
		alert("Please enter a principal amount greater than 0.");
		document.getElementById("principal").focus()} else {
			
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
			// Working without highlights
			//document.getElementById("result").innerHTML="If you deposit "+principal+",\<br\>at an interest rate of "+rate+"%\<br\>You will receive an amount of "+amount+",\<br\>in the year "+year+"\<br\>"};
			document.getElementById("result").innerHTML="If you deposit <mark\>"+principal+"\</mark>,\<br\>at an interest rate of <mark\>"+rate+"\</mark>%\<br\>You will receive an amount of <mark\>"+amount+"\</mark>,\<br\>in the year <mark\>"+year+"\</mark>\<br\>"};
}

function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval+"%";	
}