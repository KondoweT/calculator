// functions for the visual appearance of the calculator buttons

const changeButtonSize = document.querySelectorAll('.size');
changeButtonSize.forEach(item=>{
    item.addEventListener('mousedown', function onClick() {
        item.style.borderRadius = '25px';
      })
});

changeButtonSize.forEach(item=>{
    item.addEventListener('mouseup', function onClick() {
        item.style.borderRadius = '10%';
      })
});

const equal = document.querySelector('.equal');
equal.addEventListener('mousedown', function color() {
    equal.style.backgroundColor = '#42b1b1';
})

equal.addEventListener('mouseup', function color() {
    equal.style.backgroundColor = '#d3e3fd';
})


// functions the working of the calculator below

let add = function (a,b){
    return Number(a) + Number(b);
}

let subtract = function (a,b){
    return Number(a) -Number(b);
}

let multipy = function (a,b){
    if(a === '0' || b === '0'){
        return '0';
    }else
        return Number(a) * Number(b);
}

let divide = function (a,b){
    if(a === '0'){
        return '0';
    }else if(b === '0'){
        return 'MATH ERROR'
    }
    return Number(a)/ Number(b);
}

let percentage = function (a){
    return Number(a)/100;
}

let clear = function(){
    num1 = undefined, num2 = undefined;
    operand = '', operand1 = '';
    ope = undefined, result = undefined;
    bigF.textContent = '';
}

let operate = function (a,ope,b){
    if(ope === '/'){
        return divide(a,b);
    }else if(ope === '+'){
        return add(a,b);
    }else if(ope === '-'){
        return subtract(a,b)
    }else if(ope === '*'){
        return multipy(a,b);
    }else{
        return 'MATH ERROR';
    }
}

const bigF = document.querySelector('.bigFont');
const smallF = document.querySelector('.smallFont');
const numbers = document.querySelectorAll('.num');
const operators = document.querySelectorAll('.operate');

let operand = '';
let operand1 = '';
let num1, ope, num2, result;
// console.log(`${operand} ${operand1} ${num1} ${num2} ${ope} ${result}`);

let getOperand = function(operand, text){
    if(!(text === '.')){
        operand += text;
     }else{
         let result = operand.indexOf('.');
         if(result < 0){
             operand += text;    
         }
     }
     if(operand.length > 12) {
        return operand.substring(0, 12);
    }else{
        return operand
    }
}

let manipulating = function(nm1, oper, nm2, manipulator){
    if(nm1  && oper && nm2){
        result = operate(nm1, oper, nm2);
        if(!(result === 'MATH ERROR')){
            num1 = Number(result);
        }else if(result === 'MATH ERROR'){
            num1 = undefined, num2 = undefined;
            operand = '', operand1 = '';
            ope = undefined, result = undefined;

        }
        
        operand1 = '', ope = manipulator;
        bigF.textContent = `${result}`;
    }else if(nm1 && !(oper) && !(nm2)){
        ope = manipulator;
        bigF.textContent = `${num1} `;
    }
}

let input = function(number){
    number.addEventListener('click',()=>{
        let text = number.id;
         if(!(num1 && ope)){
            operand = getOperand(operand, text);
             num1 = operand;
             bigF.textContent = num1;
         }else if(num1 && ope){
             operand1 = getOperand(operand1, text);
             num2 = operand1;
             bigF.textContent = `${num2}`;
         }
    });
}

let manipulate = function(operator){
    operator.addEventListener('click', ()=>{
        let manipulator = operator.id;
        let n1 = num1;
        let n2 = num2;
        let op = ope;
        if(manipulator === '+'){
            manipulating(n1,op,n2,manipulator);                    
        }else if(manipulator === '-'){
            manipulating(n1,op,n2,manipulator);
        }else if(manipulator === '*'){
            manipulating(n1,op,n2,manipulator);
        }else if(manipulator === '/'){
            manipulating(n1,op,n2,manipulator);
        }else if(manipulator === '%'){
            if(n1){
                result = percentage(n1);
                num1 = result;
                bigF.textContent = result;
            }
        }else if(manipulator === '='){
            if(num1 && num2){
                result = operate(num1, ope, num2);
                num1 = result, num2 = undefined, ope = undefined, operand1 = '';
                bigF.textContent = result;
            }if(num1 && !(num2)){
                result = num1;
                bigF.textContent = result;
            }
        }else if(manipulator === 'clear'){
            clear();
        }else{
            if(num1 && !(num2)){
                operand = operand.slice(0, -1);
                num1 = operand;
                bigF.textContent = num1;
            }else if(num1 && num2){
                operand1 = operand1.slice(0, -1);
                num2 = operand1;
                bigF.textContent = num2;
            }
        }

        
    });
}

numbers.forEach(input);
operators.forEach(manipulate);

