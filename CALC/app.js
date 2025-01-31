const btns = document.querySelectorAll('.btns');
const displayOutput = document.getElementById('displayOutput');
const equals = document.getElementById('equals');
const clear = document.getElementById('clear');
const del = document.getElementById('del');


btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const value = e.target.value;
        const lastChar = displayOutput.value.slice(-1);

  
        if (/[+\-*/.]/.test(lastChar) && /[+\-*/.]/.test(value)) return;

        displayOutput.value += value;
    });
});

equals.addEventListener('click', () => {
    try {
        const expression = displayOutput.value.trim(); 


        if (/^[\d+\-*/().\s]+$/.test(expression) && expression !== "") {
            displayOutput.value = eval(expression);
        } else {
            displayOutput.value = "Error!";
        }
    } catch (error) {
        displayOutput.value = "Error!";
    }
});

del.addEventListener('click', () => {
    displayOutput.value = displayOutput.value.slice(0, -1);
});

clear.addEventListener('click', () => {
    displayOutput.value = '';
});
