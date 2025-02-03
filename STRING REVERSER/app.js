const userInput = document.getElementById('userInput');
const submitBtn = document.getElementById('submitBtn');
const displayOutput = document.getElementById('displayOutput');

const reverseWords = (input) => {
    let reverse = '';
    for(let i = input.length -1; i >= 0; i--){
        reverse += input[i];

    }
    return reverse;
}

submitBtn.addEventListener('click', () => {
    const x = userInput.value;
    if(x == '' || x == null){
        displayOutput.classList.remove('hidden')
        displayOutput.classList.add('text-red-500',)
        displayOutput.textContent = 'INVALID INPUT!';
        return;
    }
    const y = reverseWords(x);
    displayOutput.classList.remove('hidden')
    displayOutput.classList.remove('text-red-500')
    displayOutput.textContent = y;
})