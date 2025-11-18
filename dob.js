const  caclAge = (birthYear) =>{
    for(let i = birthYear; i<= 2025; i++){
        console.log(i);
    }
    return 2025 - birthYear;
};
const myAge = caclAge(2006);
console.log(myAge);