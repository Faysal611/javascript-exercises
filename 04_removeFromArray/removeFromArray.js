const removeFromArray = function(array, ...toBeRemoved) {
    let arraySize = array.length;
    let newArray = [];

    for (let i = 0; i < arraySize; i++) {
        if (!toBeRemoved.includes(array[i])) {
            newArray.push(array[i]);
        }
    }

    return newArray;
}

// Do not edit below this line
module.exports = removeFromArray;
