const btns = document.querySelectorAll('.btns');
const displayOutput = document.getElementById('displayOutput');
const equals = document.getElementById('equals');
const clear = document.getElementById('clear');
const del = document.getElementById('del');


btns.forEach((btn) => {
   
    btn.addEventListener('click', (e) => {
        displayOutput.value += e.target.value;
    })
})

equals.addEventListener('click', () => {
    try {
        if (/^[\d+\-*/().]+$/.test(displayOutput.value)) {
            displayOutput.value = eval(displayOutput.value);
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