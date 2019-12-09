let button = document.getElementById("button");
let input = document.getElementById("input");
let answer = document.getElementById("answer");
let eight = document.getElementById("eight");


button.addEventListener("click", function() {
    if(input.value.length < 1) {
        alert("Logic says NO: You must ask a question to get an answer.");
    } else{
        eight.innerText = "";
        let num = Math.floor(Math.random() * 20);
        answer.innerText = options[num];
    }
  });