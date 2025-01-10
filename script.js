let currentinput = "";
let previousInput = "";
let operator = null;
let resetScreen = false;

let result = document.querySelector(".result");

function updateDisplay(){
    result.textContent = currentinput || '0';
}

document.querySelectorAll(".number").forEach(button=>{
    button.addEventListener('click',()=>{
        if(resetScreen){
            currentinput = '';
            resetScreen = false;
        }
        
            currentinput +=button.textContent;
            updateDisplay();    
    }); 
});

document.querySelector(".decimal").addEventListener('click',()=>{
    if(resetScreen){
        currentinput = '0';
        resetScreen = false;
    }
    if (!currentinput.includes('.')){
        currentinput = currentinput || '0';
        currentinput += '.';
        updateDisplay();
    }
})

document.querySelectorAll(".operator").forEach(button=>{
    button.addEventListener('click',()=>{
        if(currentinput !== ''){
            if(previousInput !== ''){
                calculate();
            }
            operator = button.textContent;
            previousInput = currentinput;
            resetScreen =true;
        }
    }); 
});

function calculate(){
    if (previousInput === '' || currentinput === '') return;

    let result;
    const prev =parseFloat(previousInput);
    const current =parseFloat(currentinput);

    switch(operator){
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '×':
            result = prev * current;
            break;
        case '/':
            if (current === 0) {
                alert('Cannot divide by zero');
                clearCalculator();
                return;
            }
            result = prev / current;
            break;
        case '%':
            result = prev * (current / 100);
            break;
        default:
            return;
    }

    result = Math.round(result*10000) / 10000;

    currentinput = result.toString();
    operator = null;
    previousInput = "";
    updateDisplay();
}

document.querySelector(".equal").addEventListener('click', calculate);


function clearCalculator(){
    currentinput = '';
    previousInput = '';
    operator = null;
    updateDisplay();
}

document.querySelector(".AC").addEventListener('click', clearCalculator);


document.querySelector('.DEL').addEventListener('click', () => {
    currentinput = currentinput.toString().slice(0, -1);
    updateDisplay();
});

updateDisplay();