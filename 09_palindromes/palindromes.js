const palindromes = function (inputArray) {
    const chars = "abcdefghijklmnopqrstuvwxyz1234567890";
    let filterdStr = inputArray.toLowerCase().split("").filter((item) => {
        return chars.includes(item);
    }).join("");

    let reverseStr = filterdStr.split("").reverse().join("");

    return filterdStr === reverseStr;
};

// Do not edit below this line
module.exports = palindromes;
