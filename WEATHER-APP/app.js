const userInput = document.getElementById('userInput');
const submitBtn = document.getElementById('submitBtn');
const message = document.getElementById('message');
const countGuess = document.getElementById('countGuess');
const guessNum = document.getElementById('guessNum');

let count = 0;

submitBtn.addEventListener('click', () => {
    let userAnswer = parseInt(userInput.value);
    const randomNum = Math.floor(Math.random() * 20) + 1; 
    guessNum.textContent = randomNum;

    if (isNaN(userAnswer)) {
        message.style.color = 'red';
        message.textContent = "Please enter a valid number 🤦‍♂️";
        return;
    }
  
    if (userAnswer < 1 || userAnswer > 20) {
        message.style.color = 'red';
        message.textContent = "Please enter a number between 1-20 only! 🤦‍♂️";
        return;
    }

    count++;
    countGuess.textContent = count;
    message.style.color = "black";

    if (userAnswer < randomNum) {
        message.textContent = "Your guess is too low! 😉";
    } else if (userAnswer > randomNum) {
        message.textContent = "Your guess is too high! 😁";
    } else {
        message.style.color = "green";
        message.textContent = `Congrats! The correct number is: ${randomNum} 🎉`;
    }

    userInput.value = "";
});
