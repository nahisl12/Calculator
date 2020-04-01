function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
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

keys.addEventListener('click', function(event){
    // if(event.target.matches('#zero')){
    //     display.textContent = '1';
    //     console.log('working');  
    // }
    let displayedNum = display.textContent;
    let selectedNum;
    const keyPressed = event.target;
    const dataAction = keyPressed.dataset.action;
    // if(dataAction === 'zero') {
    //     display.textContent = '0';
    //     console.log('working');  
    // }
    // else if (dataAction == 'one'){
    //     display.textContent = '1';
    //     console.log('working'); 
    // }
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
            case 'clear':
                display.textContent = ' ';
                break;
            default:
                break;
        }
});


// const keys = Array.from(document.querySelectorAll('.keys'));
// keys.forEach(key => key.addEventListener('click', function(){
//      if(key.matches('zero1')) {
//         display.textContent = '1';
//         console.log('working');  
//      }
// }));