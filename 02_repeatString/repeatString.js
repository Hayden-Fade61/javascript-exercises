const repeatString = function(repeatUnit, numRepeats) {
    let result = "";
    if(result == repeatUnit){
        return result;
    }
    if(numRepeats < 0){
        return "ERROR";
    }
    for(let i = 0; i < numRepeats; i++){
        result += repeatUnit;
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
