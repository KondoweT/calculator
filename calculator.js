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