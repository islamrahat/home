const display = document.getElementById("display");

function btnSelect(input) {
    display.value += input; 
}

function calculate() {
    display.value = eval(display.value);
}

function btnClear() {
    display.value = "";
}