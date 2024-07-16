const container = document.querySelectorAll(".container");

function calculateLoan(){
    const amount = parseFloat(document.getElementById("amount").value);
    const interest = parseFloat(document.getElementById("interest").value);
    const loanTerm = parseFloat(document.getElementById("loan-term").value);

    if(isNaN(amount) || isNaN(interest) || isNaN(loanTerm)){
        showError('Please enter valid numbers for calculation');
        return;
    }

    const monthlyInterest = interest /100 /12;
    const totalPayments = loanTerm;
    const monthlyPayment = (amount * monthlyInterest) / (1 - Math.pow(1+monthlyInterest, -totalPayments));
    const totalInterests = (monthlyPayment * totalPayments) - amount;

    displayResult(monthlyPayment, totalInterests);
}

function displayResult(monthlyPayment, monthlyInterest){
    const result = document.getElementById("result");
    let msg = "Monthly Interest: " + monthlyInterest.toFixed(2) + '<br>';
    msg += "Monthly Payment: " + monthlyPayment.toFixed(2);

    result.innerHTML = msg;
}

function showError(message){
    const result = document.getElementById("result");
    result.innerText = message;
}

document.getElementById("buttonBtn").addEventListener('click', calculateLoan);
