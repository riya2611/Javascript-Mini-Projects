document.getElementById("detectBtn").addEventListener("click", check);

function check(){
    const input = document.getElementById("inputText");
    const result = document.getElementById("result");

    const character = input.value;
    if(isASCII(character)){
        result.innerText = `"${character}" is an ASCII character`;
    }
    else{
        result.innerText = `"${character}" is an Unicode character`;
    }
    input.value ="";
}

function isASCII(character){
    return character.charCodeAt(0) >= 0 && character.charCodeAt(0) <= 127;
}