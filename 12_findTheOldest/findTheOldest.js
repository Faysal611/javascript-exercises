const findTheOldest = function(array) {
    let newArray = [];
    let lifeSpan = null;
    newArray = array.map(function age(person) {
        lifeSpan = person.yearOfDeath - person.yearOfBirth;
        return lifeSpan;
    }); 

    let age = null;
    let name = null;
    for (let i = 0; i < array.length; i++) {
        if (newArray[i] > age) {
            age = newArray[i];
        }
    }

    for (let j = 0; j < array.length; j++) {
        if (age === newArray[j]) {
            name = array[j].name;
        }
    }

    return name;
};

// Do not edit below this line
module.exports = findTheOldest;
