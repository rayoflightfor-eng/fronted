const person={
    name: "John",
    age: 30,
    city: "New York",
    introduce: function() {
        return `Hi, I'm ${this.name} from ${this.city}. I am ${this.age} years old.`;
    },
    
};
 const{ name: personName, age, city } = person;
 console.log(personName, age, city);