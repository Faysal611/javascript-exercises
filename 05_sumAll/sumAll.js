const sumAll = function(firstNum, lastNum) {
    let sum = null;

    if (!Number.isInteger(firstNum) || !Number.isInteger(lastNum) || firstNum < 0 || lastNum < 0) {
        return "ERROR";
    }

    if (firstNum < lastNum) {
    for (let i = Number(firstNum); i <= Number(lastNum); i++) {
        sum = sum + i;
    }
}
    else {
        for (let i = Number(lastNum); i <= Number(firstNum); i++) {
            sum = sum + i;
    }

};

    return sum;

}
// Do not edit below this line
module.exports = sumAll;
