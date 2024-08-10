const findTheOldest = function(people) {
  return people.reduce((oldestPerson, currentPerson) => {
    return getAge(currentPerson) > getAge(oldestPerson) ? currentPerson : oldestPerson;
  });
};

function getAge(person){
  const currentYear = new Date().getFullYear();
  return person.yearOfDeath === undefined ? 
    currentYear - person.yearOfBirth :
    person.yearOfDeath - person.yearOfBirth ; 
}

// Do not edit below this line
module.exports = findTheOldest;
