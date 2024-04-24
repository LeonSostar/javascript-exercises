const findTheOldest = function(arr) {
    let oldest = 0;
    let oldestP;
    arr.forEach(person => {
        if (getAge(person.yearOfBirth, person.yearOfDeath) > oldest) {
            oldest = getAge(person.yearOfBirth, person.yearOfDeath);
            oldestP = person;
        }
    });     
    return oldestP;
};

const getAge = function(born, dead) {
    if (!dead) {
        dead = new Date().getFullYear();
    }
    return dead - born;
}

// Do not edit below this line
module.exports = findTheOldest;
