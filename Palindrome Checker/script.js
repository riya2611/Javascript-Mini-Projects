function isPalindrome(str){
    const cleanStr = str.toLowerCase();
    // console.log(cleanStr);
    const reverseStr = cleanStr.split('').reverse().join('');
    // console.log(reverseStr);
    if(cleanStr === reverseStr){
        return true;
    }
    return false;
}

function PalindromeChecker(){

    const num = document.getElementById("inputText");
    const res = document.getElementById("result");

    if(isPalindrome(num.value)){
        res.textContent = `"${num.value}" is a palindrome.`;
    }
    else{
        res.textContent = `"${num.value}" is not a palindrome.`;
    }
    num.value = '';
}

document.getElementById("checkButton").addEventListener("click", PalindromeChecker);