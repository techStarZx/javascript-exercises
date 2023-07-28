const findTheOldest = function (array) {
    return array.reduce((oldestPerson, currentPerson) => {
        let oldestAge = getAge(oldestPerson.yearOfBirth, oldestPerson.yearOfDeath);
        let currentAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);
        
        return (oldestAge > currentAge) ? oldestPerson : currentPerson;
    })
};

function getAge(yearOfBirth, yearOfDeath) {
    if (!yearOfDeath)
        yearOfDeath = new Date().getFullYear();
    return yearOfDeath - yearOfBirth;
}

// Do not edit below this line
module.exports = findTheOldest;
