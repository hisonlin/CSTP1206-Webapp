//rest operator ...

function multiply(num1,num2,num3){
    return num1*num2*num3;
}

console.log(multiply(2,3,4));


//using rest ...
function multiplyWithRest(...nums){
    let total = 1;
    for(item of nums){
        total *= item;
    }
    return total;
}
console.log(multiplyWithRest(1));
console.log(multiplyWithRest(1,2));
console.log(multiplyWithRest(1,2,3));
console.log(multiplyWithRest(10,20,30,40,50));


//emaple average

function average(type, ...nums){
    let sum = nums.reduce((acc,cv)=>acc+cv,0);
    let average = sum / nums.length
    console.log(`The average of ${type} is ${average}`);

}
average("marks", 1,2,3,4);

//spread operator
let array1 = [1,2,3];
let array2 = [4,5,6];

//let finalArray = [1,2,3,4,5,6]
let finalArray = [...array1,...array2];
console.log(finalArray);


//rest operator with object
let student = {
    name: "Daniel",
    email: 'daniel@gmail.com'
}

let studentWithVCC = {
    ...student,
    college: "VCC",
    address: "Vancouver"
}

console.log(studentWithVCC);

//math function
let arrayItem = [1,2,3,4,5,6];
console.log(Math.max(...arrayItem));

//Destructuring in object
let{college}= studentWithVCC;
console.log(college);

//Destructuring in array
let fruitList = ["mango", "apple", "orange", "grape"];

let [item1, item2, item3] = fruitList;
console.log(item1, item2, item3);

//template literal
let age = 28;
let myName = "hison";

console.log(`Age of ${myName} is ${age}`);