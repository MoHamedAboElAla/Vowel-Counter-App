function checkVowels(){
let inputString = document.getElementById("textInput").value;
let vowels = "aeiou";
let vowelCount = 0;
for(let i = 0; i < inputString.length; i++){
    if(vowels.includes(inputString[i].toLowerCase())){
        vowelCount++;
    }
}
document.getElementById("result").innerText = "Number of vowels: " + vowelCount;
}