const myFeedback = document.getElementById("feedback");
const myButton = document.getElementById("button");
const myInput = document.getElementById("input");
const myRandom = document.getElementById('score');

let randomNumber;
randomNumber = Math.ceil(Math.random() * 100);

myRandom.textContent = randomNumber


myButton.onclick = function(){
    input = Number(myInput.value)
    if (input > randomNumber) {
        myFeedback.textContent="Too high! Try Again"
    }
    else if(input<randomNumber){
        myFeedback.textContent="Too low! Try Again"
    }
    else{
        myFeedback.textContent="You won!"
    }

}

