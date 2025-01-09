let result = "";
let evaluated = false;

const display = document.querySelector(".result");
function updateDisplay(){
    display.textContent = result || "0"; 
}

function handleNumber(num){
    if(evaluated){
        result = num;
        evaluated = false;
    }else{
        result += num;
    }
}


function handleOperator(num){
    if (result && !'+-×/%'.includes(result.slice(-1))) {
        result += op;
        updateDisplay();
    }
}

function calculate(expression){
    
}