let herAge = 25;
console.log(person[herAge]);
person.birthYear = 2025-person.age;
person.tellYourAge = function() {
    console.log(`I am ${this.age} years old.`);

};
person.tellYourAge();