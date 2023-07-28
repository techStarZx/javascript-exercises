const sumAll = function(from, to) {
    let result = 0;
    
    if(
        typeof from != 'number' ||
        typeof to != 'number' ||
        from < 0 ||
        to < 0)
        return 'ERROR';

        if(from > to) {
            let temp = from;
            from = to;
            to = temp;
        }
    for(i = from; i <= to; i++)
        result += i;
    return result;
};

// Do not edit below this line
module.exports = sumAll;
