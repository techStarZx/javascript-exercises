const removeFromArray = function(arr, ...remove) {
    let result = arr.filter(element => {
        if(remove.indexOf(element) == -1)
            return true;
        return false;
    });
return result;
};

// Do not edit below this line
module.exports = removeFromArray;
