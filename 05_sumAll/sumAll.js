const sumAll = function(num1, num2) {
    if(!Number.isInteger(num1) || !Number.isInteger(num2)){
        return "ERROR";
    }
    if((num1 < 0 || num2 < 0)){
        return "ERROR";
    }
    if (num1 == num2){
        return num1;
    }
    let hi;
    let lo;
    if(num1 < num2){
        lo = num1;
        hi = num2;
    }
    else {
        lo = num2;
        hi = num1;
    }
    let result = 0;
    for(let i=lo; i <= hi; i++){
        result += i;
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;
