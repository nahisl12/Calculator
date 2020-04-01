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
    const keyPressed = event.target;
    const dataAction = keyPressed.dataset.action;
    if(dataAction === 'zero') {
        display.textContent = '0';
        console.log('working');  
    }
    else if (dataAction == 'one'){
        display.textContent = '1';
        console.log('working'); 
    }
});


// const keys = Array.from(document.querySelectorAll('.keys'));
// keys.forEach(key => key.addEventListener('click', function(){
//      if(key.matches('zero1')) {
//         display.textContent = '1';
//         console.log('working');  
//      }
// }));