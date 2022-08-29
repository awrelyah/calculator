let previousOp = document.querySelector('.previous-operand');
let currentOp = document.querySelector('.current-operand');
let numbers = document.querySelectorAll('.num');
let operands = document.querySelector('.op');
let clearBtn = document.getElementById('clear');
let equalsBtn = document.getElementById('equals');

numbers.forEach(el => {
    el.addEventListener('click', (e) =>{
        changeDisplay(e.target.textContent);
    })
});

function changeDisplay(number){
    currentOp.textContent = number;
}