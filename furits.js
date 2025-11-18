const fruits = ["apple", "banana", "mango", "orange"];
const[first,second,,fourth]=[
    "apple", "banana", "mango", "orange"
];
console.log(first);
console.log(second);
console.log(fourth);
const morefruits = ["grape", "kiwi"];
const combineFruits = [first, second, ...restFruits] = [...combineFruits, ...morefruits];
console.log(restFruits);]n