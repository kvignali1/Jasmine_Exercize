const calcForm = document.querySelector("#calc-form");
const calcContainer = document.querySelector(".calc-container");
const loanAmount = document.querySelector("#loan-amount");
const loanInYears = document.querySelector("#loan-years");
const loanRate = document.querySelector("#loan-rate");
const calcSubmit = document.querySelector("#calc-submit");
const monthlyPayment = document.querySelector("#monthly-payment");

// submit for monthlyPaymentUpdate
calcSubmit.addEventListener("click", (e) => {
	e.preventDefault();
	console.log("clicked Submit Button");
	updateMonthlyPayment(loanAmount.value, loanInYears.value, loanRate.value);
});

function updateMonthlyPayment(amount, years, rate) {
	let a = amount;
	let y = years;
	let r = rate;
	stringToAppend = calculate(a, y, r);
	monthlyPayment.innerHTML = stringToAppend;
}

function calculate(a, y, r) {
	let years = y * 12;
	let rate = r / 100 / 12;
	let calculation = `${(a * rate) / (1 - (1 + rate) ** -years)}`;
	let result = (Math.round(calculation * 100) / 100).toFixed(2);
	return result;
}
