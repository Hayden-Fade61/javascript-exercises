const removeFromArray = function(arr, ...args) {
    args.forEach(element => {
        for(let i = 0; i < arr.length; i++){
            console.log(`i: ${i}`);
            console.log(`arr: ${arr[i]}`);
            console.log(`arg: ${element}`);
            if(element === arr[i]){
                arr.splice(i--, 1);
            }
        }
    });
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
