document.getElementById("addButton").addEventListener("click", incrementValue);
document.getElementById("subtractButton").addEventListener("click", decrementValue);
document.getElementById("reset").addEventListener("click", resetValue);

let counter_display = document.getElementById("counter_display");
let counterValue = 0;

function incrementValue(){
    counterValue++;
    updateCounterDisplay()
    console.log(counterValue);
}

function decrementValue(){
    if(counterValue > 0){
        counterValue--;
        updateCounterDisplay()
        console.log(counterValue);
    }
    else{
        console.error("ERROR!! Value cannot be decremented");
        alert("Value can't be decremented from 0");
    }
}

function resetValue(){
    counterValue = 0;
    updateCounterDisplay()
    console.log(counterValue);
}

function updateCounterDisplay(){
    counter_display.textContent = counterValue;
}
