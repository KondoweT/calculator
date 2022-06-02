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

function add(a,b){
    return a + b;
}

function subtract(a,b){
    return a -b;
}

function multipy(a,b){
    return a * b;
}

function divide(a,b){
    return a/b;
}

function percentage(a){
    return a/100;
}

function operator(a){
    return percentage(a);
}

function operator(a,b,ope){
    if(ope === '/'){
        return divide(a,b);
    }else if(ope === '+'){
        return sum(a,b);
    }else if(ope === '-'){
        return subtract(a,b)
    }else if(ope === '*'){
        return multipy(a,b);
    }else{
        return 'MATH ERROR';
    }
}

const numbers = document.querySelectorAll('.num');
const operations = document.querySelector('.operations');
const numb = document.createElement('div');
numb.classList.add('bigFont');

let op1 = '';
numbers.forEach(num =>{
    num.addEventListener('click', function(){
        let text = num.id;
        if(!(text === '.')){
           op1 += text;
        }else{
            let result = op1.indexOf('.');
            if(result < 0){
                op1 += text;    
            }
        }
        numb.textContent = Number(op1);
        operations.appendChild(numb)
        console.log(op1);
    })
});

