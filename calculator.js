// functions for the visual appearance of the calculator button

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
    return a + b;
}

let subtract = function (a,b){
    return a -b;
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

let operand = '';
let num1, num2, ope;

let input = function(number){
    number.addEventListener('click',()=>{
        let text = number.id;
        if(!(text === '.')){
            operand += text;
         }else{
             let result = operand.indexOf('.');
             if(result < 0){
                 operand += text;    
             }
         }
         if(operand.length > 17) {
            operand = operand.substring(0, 17);
        }
         console.log(operand);
    });
}

numbers.forEach(input);

