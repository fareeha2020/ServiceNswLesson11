// Make a dereferenced copy of the array below. (Hint: You will need to dereference each object in the array, not just the array itself)
let myPeople=[
    {
        firstName: "Luke",
        lastName: "Parker",
        age: 23
    }, {
        firstName: "Rachel",
        lastName: "Nox",
        age: 28
    }, {
        firstName: "Douglas",
        lastName: "Adams",
        age: 42
    }
];
//let dereferencedPeople = myPeople.map(person => ({ ...person }));//is deferencing whole array
let lukeFromArr = myPeople.find(person => person.firstName == "Luke")
let luke = { ...lukeFromArr };
luke.age++;
console.log(luke);     // Luke's age is 24
console.log(myPeople)//luke age is 23