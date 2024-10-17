const reverseString = function(str) {

    let strLength = str.length; //hello 5
    let index = strLength - 1;
    let revStr = [];

    for (let i = 0; i < strLength; i++) {
        revStr[i] = str.at(index);
        index = index - 1;
    }

    return revStr.join("");
};

// Do not edit below this line
module.exports = reverseString;
