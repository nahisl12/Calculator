/* Calculation Functions */
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

function operate(operator, a, b) {  //Takes an operator and 2 variables to call/calculate the sum
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


/*DOM Functions */
const display = document.querySelector('.display');
const keys = document.querySelector('.keys');
let firstEntry = 0;     // Stores the first set of numbers entered
let secondEntry = 0;    // Second set of numbers entered
let operation;          // Stores the pressed operation for calculations

keys.addEventListener('click', function(event){     //Adds an eventlistener to the keys class to look for button clicks
    const keyPressed = event.target;                //Checks for an event on whatever button is pressed
    const dataAction = keyPressed.dataset.action;   //Checks for the data-action tag linked to the pressed button
    const keyContent = keyPressed.textContent;      //Grabs whatever text/number is within the pressed key
    let displayedNum = display.textContent;         //Holds whatever nums is currently displayed on screen

        if(dataAction) {    //If a button is pressed
            if(displayedNum === '0') {  //Check that a 0 is displayed and replace it with the number of the pressed button
                display.textContent = keyContent;
            } else {    //Otherwise run the statements below depending on what button is pressed
                switch(dataAction) {
                    case 'zero':
                        display.textContent = displayedNum + '0';   //Concatanates the pressed num to the current display content
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
                        if(!displayedNum.includes('.')) {
                        display.textContent = displayedNum + '.';
                        }
                        break;  
                    case 'add':
                        firstEntry = displayedNum;  //Stores the current displayed numbers into this function
                        operation = '+';            //Sets the operation variable to value of the button that was pressed
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
                        secondEntry = displayedNum; //When equal is pressed the second set of entered nums are stored here
                        display.textContent = operate(operation, firstEntry, secondEntry);  //Takes the 3 variables and calls the appropriate operator function
                        break;
                    case 'clear':
                        display.textContent = '0';
                        firstEntry = 0;
                        secondEntry = 0;
                        operation = '';
                        break;
                }
            }
        }
});