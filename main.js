function add(a, b) {
    return parseFloat(a) + parseFloat(b);
}

function subtract(a, b) {
    return parseFloat(a) - parseFloat(b);
}

function multiply(a, b) {
    return parseFloat(a) * parseFloat(b);
}

function divide(a, b) {
    return parseFloat(a) / parseFloat(b);
}

function operate(operator, a, b) {
    if(operator === '+') {
        return add(a, b);
    }
    if(operator === '-') {
        return subtract(a, b);  
    }
    if(operator === '*') {
        return multiply(a, b);
    }
    if(operator === '/') {
        return divide(a, b);
    }
}

const display = document.querySelector('.display');
const keys = document.querySelector('.keys');
let firstEntry;
let secondEntry;
let operation;

keys.addEventListener('click', function(event){ 
    const keyPressed = event.target;
    const dataAction = keyPressed.dataset.action;
    const keyContent = keyPressed.textContent;
    let displayedNum = display.textContent;

        if(dataAction) {
            if(displayedNum === '0') {
                display.textContent = keyContent;
            } else {
                switch(dataAction) {
                    case 'zero':
                        display.textContent = displayedNum + '0';
                        break;
                    case 'one':
                        display.textContent = displayedNum + '1';
                        break;
                    case 'two':
                        display.textContent = displayedNum + '2';
                        break;
                    case 'three':
                        display.textContent = displayedNum + '3';
                        break;  
                    case 'four':
                        display.textContent = displayedNum + '4';
                        break;          
                    case 'five':
                        display.textContent = displayedNum + '5';
                        break;
                    case 'six':
                        display.textContent = displayedNum + '6';
                        break;
                    case 'seven':
                        display.textContent = displayedNum + '7';
                        break; 
                    case 'eight':
                        display.textContent = displayedNum + '8';
                        break;  
                    case 'nine':
                        display.textContent = displayedNum + '9';
                        break;  
                    case 'decimal':
                        display.textContent = displayedNum + '.';
                        break;  
                    case 'add':
                        firstEntry = displayedNum;
                        operation = '+';
                        display.textContent = '0';
                        break;
                    case 'subtract':
                        firstEntry = displayedNum;
                        operation = '-';
                        display.textContent = '0';
                        break;
                    case 'multiply':
                        firstEntry = displayedNum;
                        operation = '*';
                        display.textContent = '0';
                        break;
                    case 'divide':
                        firstEntry = displayedNum;
                        operation = '/';
                        display.textContent = '0';
                        break;
                    case 'equal':
                        secondEntry = displayedNum;
                        display.textContent = operate(operation, firstEntry, secondEntry);
                        break;
                    case 'clear':
                        display.textContent = '0';
                        break;
                }
            }
        }
});