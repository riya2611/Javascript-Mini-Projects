function calculateLove(){
    const name1 = document.getElementById("ur-name").value;
    const name2 = document.getElementById("partner-name").value;

    if(name1 === "" || name2 === ""){
        alert("Please enter your name and your partner's name");
    }
    
    const lovePercentage = Math.floor(Math.random() * 101);
    const result = document.getElementById("result");

    result.innerHTML = `<b>${name1}</b> and <b>${name2}</b> love percentage is ${lovePercentage}%.`;    
    if(lovePercentage < 30){
        result.innerHTML += "<br> <b>Not a Great Match.</b> Keep looking!";
    }
    else if(lovePercentage >= 30 && lovePercentage < 70){
        result.innerHTML += "<br> There is potential. Give it a try!";
    }
    else{
        result.innerHTML += "<br> <b>Great Match.</b> Love is in the air!";
    }
    
}