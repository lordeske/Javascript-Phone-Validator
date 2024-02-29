const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const results= document.getElementById("results-div");

const firstRegex = /^(1\s?)?(\d{3}|\(\d{3}\))[\-\s]?\d{3}[\-\s]?\d{4}$/

const regexArray = [firstRegex];

const test = (num) =>  regexArray.some((regex)=> regex.test(num))


checkBtn.addEventListener("click" , ()=>{

  if(userInput.value==="")
  {
    alert("Please provide a phone number");
    return;

  }

  results.innerHTML += test(userInput.value) ? "Valid US number: " + userInput.value + "<br>"
  : "Invalid US number: " + userInput.value + "<br>";






})





clearBtn.addEventListener("click", ()=>{


    results.innerHTML = "";


})