// functions for the visual appearance of the calculator buttons

const changeButtonSize = document.querySelectorAll('.size');
changeButtonSize.forEach(item=>{
    item.addEventListener('mousedown', function onClick() {
        item.style.borderRadius = '25px';
      })
});

changeButtonSize.forEach(item=>{
    item.addEventListener('mouseup', function onClick() {
        item.style.borderRadius = '50%';
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
    return a * b;
}

let divide = function (a,b){
    return a/b;
}

let percentage = function (a){
    return a/100;
}

let operate = function (a,ope,b){
    if(!(b)){
        return percentage(a);
    }else if(ope === '/'){
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
let numbers = document.querySelectorAll('.num');
let operators = document.querySelectorAll('.operate');

let operand = '';
let operand1 = '';
let num1, ope, num2, result;

let getOperand = function(operand, text){
    if(!(text === '.')){
        operand += text;
     }else{
         let result = operand.indexOf('.');
         if(result < 0){
             operand += text;    
         }
     }
     if(operand.length > 17) {
        return operand.substring(0, 17);
    }else{
        return operand
    }
}

let manipulating = function(nm1, oper, nm2, manipulator){
    if(nm1 && oper && nm2){
        result = operate(nm1, oper, nm2);
        // smallF.textContent = `${num1} ${ope} ${num2}`;
        num1 = result, operand1 = '', ope = manipulator;
        bigF.textContent = `${result} ${ope}`;
    }else if(nm1 && !(oper) && !(nm2)){
        ope = manipulator;
        bigF.textContent = `${num1} ${ope}`;
    }
}

let input = function(number){
    number.addEventListener('click',()=>{
        let text = number.id;
         if(!(num1 && ope)){
            operand = getOperand(operand, text);
             num1 = Number(operand);
             bigF.textContent = num1;
         }else if(num1 && ope){
             operand1 = getOperand(operand1, text);
             num2 = Number(operand1);
             bigF.textContent = `${num1} ${ope} ${num2}`;
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
        }

        
    });
}

numbers.forEach(input);
operators.forEach(manipulate);

