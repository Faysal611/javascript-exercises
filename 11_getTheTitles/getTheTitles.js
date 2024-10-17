const getTheTitles = function(array) {
    let newArray = [];

    function title(x) {
        return x.title;
    }
    newArray = array.map(title);

    return newArray;
};

// Do not edit below this line
module.exports = getTheTitles;
