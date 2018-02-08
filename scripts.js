var maxNumber = 10;
var randomNumber = Math.floor(Math.random() * maxNumber) + 1;
var maxTries = 20;
var userTries = 0;

function setMaxNumber() {
	maxNumber = parseInt(document.getElementById("maxNumberValue").value);
	document.getElementById("maxNum").innerHTML = maxNumber;
	randomNumber = Math.floor(Math.random() * maxNumber) + 1;

}

function checkGuess() {
	if (!isNaN(parseInt(document.getElementById("userGuess").value))) {

		userTries += 1;
		if (userTries < maxTries) {
			if (parseInt(document.getElementById("userGuess").value) > randomNumber) {
				document.getElementById("result").classList = "text-warning";
				document.getElementById("result").innerHTML = "Too large!";
				document.getElementById("userGuess").value = "";
			} else if (parseInt(document.getElementById("userGuess").value) < randomNumber) {
				document.getElementById("result").classList = "text-warning";
				document.getElementById("result").innerHTML = "Too small!";
				document.getElementById("userGuess").value = "";

			} else {
				document.getElementById("result").innerHTML = "You got it!!!";
				document.getElementById("result").classList = "text-success";
				document.getElementById("playAgain").style.display = "block";
			}

			document.getElementById("triesLeft").innerHTML = maxTries - userTries;
		} else {
			document.getElementById("guessesRemaining").innerHTML = "The secret number was: " + randomNumber;
			document.getElementById("playAgain").style.display = "block";
			document.getElementById("result").classList = "text-danger";
			document.getElementById("result").innerHTML = "You have ran out of tries!";
			document.getElementById("triesLeft").innerHTML = maxTries - userTries
			document.getElementById("guessBtn").disabled = true;

		}
	} else {
		document.getElementById("result").classList = "alert alert-danger";
		document.getElementById("result").innerHTML = "Enter a valid number!";
	}
}

function initializeSettings() {

	document.getElementById("triesLeft").innerHTML = maxTries;
}

function playAgain() {
	document.location.reload(true);
}
function getMaxTries(){
	return
}
function setIcomeTax(){
	

	
	var personalAllowanceThreashold=11500;
	var basicThreshold=45000;
	var higherThreashold=150000;
	
	var basicRateOfTax=20;
	var higherRateOfTax=40;
	var additionalRateOfTax=45;
	
	var monthlySalarayAfterTax=0;
	var taxDue=0;
	
	var salary=document.getElementById("salary").value;
	
	var taxableIncome=0;
	taxableIncome=salary-personalAllowanceThreashold;
	var monthlySalary=salary/12;

	if(salary<=personalAllowanceThreashold){
		monthlySalarayAfterTax=monthlySalary;
		taxDue=0;
		
	}else if (salary<=basicThreshold){
		
		taxDue=taxableIncome * (basicRateOfTax)/100;
		monthlySalarayAfterTax=monthlySalary-taxDue/12;
		
	}else if (salary<=basicThreshold){
		
		taxDue=taxableIncome * (higherRateOfTax)/100;
		monthlySalarayAfterTax=monthlySalary-taxDue/12;
	}else{
		taxDue=taxableIncome * (additionalRateOfTax)/100;
		monthlySalarayAfterTax=monthlySalary-taxDue/12;
		
	}
	document.getElementById("monthlyTax").innerHTML= (taxDue/12).toFixed(2);
	document.getElementById("netIcome").innerHTML= (monthlySalarayAfterTax).toFixed(2);
	
	
}

