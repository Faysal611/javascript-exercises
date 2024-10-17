const fibonacci = function(input) {
    let array = [0, 1];
    let sum = null;
    let arrayLength = null;

    if (Number(input) < 0) {
        return "OOPS";
    }

    else if (Number(input) === 0) {
        return 0;
    }

    else if (Number(input) === 1) {
        return 1;
    }

    for (let i = 2; i <= Number(input); i++) {
        sum = array[i - 2] + array[i - 1];
        array.push(sum);
    }

    return sum;
};
//1 1 2 3 5
// Do not edit below this line
module.exports = fibonacci;
