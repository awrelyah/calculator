let previousDisplayNum = document.querySelector('.previous-operand');
let currentDisplayNum= document.querySelector('.current-operand');

let numbers = document.querySelectorAll('.num');
let operators = document.querySelectorAll('.op');

let clearBtn = document.getElementById('clear');
let equalsBtn = document.getElementById('equals');
let signBtn = document.getElementById('sign');


let currentNum = "";
let previousNum = "";
let operator = "";
let result = "";


equalsBtn.addEventListener('click', getResult);
clearBtn.addEventListener('click', clearDisplay);
signBtn.addEventListener('click', changeSign)

//clear all
function clearDisplay(){
    currentNum = "";
    previousNum = "";
    operator = "";
    result = "";
    currentDisplayNum.textContent = currentNum;
    previousDisplayNum.textContent = previousNum;

}

//change numbers between negative & positive
function changeSign(){
    if (currentNum === ''){
        currentNum = '-';
        currentDisplayNum.textContent = currentNum;
    } else {
        currentNum = currentNum - (currentNum * 2);
        currentDisplayNum.textContent = currentNum;
    }
}

//get clicked numbers
numbers.forEach(el => {
    el.addEventListener('click', (e) =>{
        changeNum(e.target.textContent);
    })
}); 

//add clicked numbers to display
function changeNum(number){  
        if(currentNum.length <= 12){
            currentNum += number;
            currentDisplayNum.textContent = currentNum;
        }
}

//get clicked operator
operators.forEach(op =>{
    op.addEventListener('click', (o)=>{
        operate(o.target.textContent);

    })
})

//change previous num, current num and display after clicking an operator
function operate(op){
    if(result !==  ''){
        operator = op;
        previousNum = result;
        currentNum = '';
        console.log(previousNum);
        console.log(currentNum);
        console.log(result);

        previousDisplayNum.textContent = previousNum + ' ' + operator;
        currentDisplayNum.textContent = currentNum;
    } else {
        operator = op; 
        previousNum = currentNum;
        previousDisplayNum.textContent = previousNum + ' ' + operator;
        currentNum = '';
        currentDisplayNum.textContent = '';
    };
    
}


//get the result
function getResult(){
    previousNum = parseFloat(previousNum);
    currentNum = parseFloat(currentNum);
    result = parseFloat(result);

    if(operator === '+'){
         result = previousNum + currentNum;
    } else if (operator === '-'){
        result = previousNum - currentNum;
    } else if (operator === 'x'){
        result = previousNum * currentNum;
    } else if (operator === '÷'){
        if (currentNum === 0){
            result = 'Error';
        } else {
            result = previousNum / currentNum;
        }
    }
    previousDisplayNum.textContent = previousNum + operator + currentNum;
    currentDisplayNum.textContent = result;


}



