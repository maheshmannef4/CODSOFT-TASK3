let display = document.getElementById('display');
let buttons = document.querySelectorAll('.grid-item');

let result = '';
let currentNumber = '';
let previousNumber = '';
let operator = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        let value = button.value;

        if (value === '=' ) {
            calculate();
        } else if (value === 'C') {
            clear();
        } else if (['+', '-', '*', '/'].includes(value)) {
            setOperator(value);
        } else {
            appendNumber(value);
        }
    });
});

function appendNumber(value) {
    currentNumber += value;
    display.value = currentNumber;
}

function setOperator(value) {
    previousNumber = currentNumber;
    currentNumber = '';
    operator = value;
}

function calculate() {
    let result;

    switch (operator) {
        case '+':
            result = parseFloat(previousNumber) + parseFloat(currentNumber);
            break;
        case '-':
            result = parseFloat(previousNumber) - parseFloat(currentNumber);
            break;
        case '*':
            result = parseFloat(previousNumber) * parseFloat(currentNumber);
            break;
        case '/':
            result = parseFloat(previousNumber) / parseFloat(currentNumber);
            break;
        default:
            result = '';
    }

    display.value = result;
    previousNumber = result.toString();
    currentNumber = '';
}

function clear() {
    display.value = '';
    previousNumber = '';
    currentNumber = '';
    operator = '';
}
