const calculator = {
    displayValue: '0',
    firstOperand:  null,
    waitingForSecondOperand:  false,
    operator:  null,
};

function inputDigit (digit){
const {displayValue, waitingForSecondOperand} = calculator;

if(waitingForSecondOperand ===true){
    calculator.displayValue = digit;
    calculator.waitingForSecondOperand =false;
}
else{
    calculator.displayValue = displayValue ==='0' ? digit : displayValue +digit;
        }
    console.log(calculator);
    }

function inputDecimal(dot){
    if (!calculator.displayValue.includes(dot)){
        calculator.displayValue += dot;
    }
}

function handleOperator (nextOperator){
    const {firstOperand,displayValue, operator} = calculator
    const inputValue = parseFloat(displayValue);

    if(operator && calculator.waitingForSecondOperand){
        calculator.operator =nextOperator;
        console.log(calculator);
        return;
    }
if (firstOperand == null && !isNaN(inputValue)){
    calculator.firstOperand = inputValue;
}
else if(operator) {
const result = calculate(firstOperand,inputValue,operator);
calculator.displayValue = `${parseFloat(result.toFixed(7))}`;
calculator.firstOperand = result;
}

calculator.waitingForSecondOperand =true;
calculator.operator =nextOperator;

}

function calculate(firstOperand, secondOperand, operator){
    if(operator === '+'){
        return firstOperand + secondOperand;
    }
    else if (operator  === '-'){
        return firstOperand - secondOperand; 
    }
    else if (operator === '*') {
        return firstOperand * secondOperand; 
    }
    else if (operator === '/'){
        return firstOperand / secondOperand; 
    }
    return secondOperand;

   
}

function resetCalculator(){
    calculator.displayValue = '0';
    calculator.firstOperand = null;
    calculator.waitingForSecondOperand =false;
    calculator.operator =null;
    console.log(calculator);
}

function updateDisplay(){
    // Select the element with class of 'Calculator -screen
    const display = document.querySelector('.calculator-screen');
    // update the value of the element with the contents of `displayValue`
    display.value = calculator.displayValue;
}
updateDisplay();

const keys = document.querySelector('.calculator-keys');
keys.addEventListener('click', (event) =>{
  
    const{target} =event;
    const{value} = target;
    if (!target.matches('button')){
        return;
       
    }
    switch(value){
        case '+':
        case '-':
        case '*':
        case '/':
        case '=':
            handleOperator(value);
            break;
            case '.':
            inputDecimal(value);
            break;
            case 'all-clear':
            resetCalculator();
            break;
            default:
            if (Number.isInteger(parseFloat(value))){
                inputDigit(value);
            }

    }

/*const saveResult = function(result, storageName = 'resultstorage'){
    let store =[3,5,6,332];
    store.push(result);
    localStorage.setItem(storageName,JSON.stringify(store));
    getResult();

}
const getResult = function( storageName ='resultstorage'){
    let result;
    try{
        result = JSON.parse(localStorage.getItem(storageName));
        document.querySelector('#output').innerHTML =result
    }
    catch(err){

    }
}
const removeResult = (storageName = 'resultstorage') => localStorage.removeItem(storageName);
let value = 23;
saveResult(value);*/









let secondOperand = [];
localStorage.setItem('answer',JSON.stringify(secondOperand));
const data = JSON.parse(localStorage.getItem('answer'));

itemArray.push(input.value)
localStorage.setItem('answer',JSON.stringify(itemArray));









updateDisplay();


});