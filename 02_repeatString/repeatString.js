const repeatString = function(str, count) {
    let array = [];

    if (count < 0) {
        return "ERROR";
    }

    for (let i = 0; i < count; i++) {
        array[i] = str;
    }

    return array.join("");
};

// Do not edit below this line
module.exports = repeatString;
