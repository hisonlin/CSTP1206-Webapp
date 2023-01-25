//First class Function

let sum = function(){
    return 3+4;
}

console.log(sum());

let multiply = () =>{
    return 2*3;
}

console.log(multiply());

//Higher Order Function(HOF's)

//Passing function as an argument
function callMe(dial){
    dial();//callback
}

function dialing(){
    console.log("Dialing......")
}

callMe(dialing);

//Function return another function
//Closure - Advance Concept of JS
function A(num1){
    return function B(num2){
        console.log(num1 + num2) ;
    }
}

let val1 = A(4);//This returns the function B to val1
val1(10);//Here 10 is parameter num2, and val1 is function B

//ForEach Function

let array = [1,2,3,4,5];

array.forEach((item, index) => {
    console.log(item, index);
})

//Map Function - This function is used to manipulate items inside an array, remember it doesnt change the original array
//Another Fact, the length of the modified array will be same as original array
//Map function
let modifiedArray = array.map((item) => {
    return item *2
})
console.log(modifiedArray);

//Same here
let newArray = [];
for(item of array){
    let newValue = item * 2;
    newArray.push(newValue);
}
console.log(newArray);



let employeesIdList = [100, 101, 102, 103];

//[S100, E101, S102, E103]; //We need to add S in front of even employees ID and E for Odd employee
let modifiedEmployeeList = employeesIdList.map(function(employeeId){
    if(employeeId % 2 === 0){
        employeeId ="S" + employeeId;
    }
    else{
        employeeId ="E" + employeeId;
    }
    return employeeId;
})

console.log(modifiedEmployeeList);


let employeeList = [
    {
        id : 1,
        name : "Mike",
        email : "mike@gmail.com",
        age :28

    },
    {
        id : 2,
        name : "Daniel",
        email : "daniel@gmail.com",
        age :65
    },
    {
        id : 3,
        name : "Stacy",
        email : "stacy@gmail.com",
        age :28
    },
    {
        id : 4,
        name : "Roy",
        email : "roy@gmail.com",
        age :61
    },
    {
        id : 5,
        name : "Charles",
        email : "charles@gmail.com",
        age :60
    }
]

let modifiedEmployeeListWithPensions = employeeList.map(function(employee){
    if(employee.age > 60){
        employee.willGetPension = true;
    }
    else{
        employee.willGetPension = false;
    }
    return employee;
})

console.log(modifiedEmployeeListWithPensions);

console.log(employeeList);

//Note: map function in array dont change the original array


//FilterFunction - This function is used to filter items inside an array, remember it does change the original array

let list = [100, 101, 102, 104, 105, 106];

//Filter out the even numbers

let evenNumberList = list.filter((val) => {
    if (val % 2 === 0){
        return true;
    }
})

let odderNumberList = list.filter(function(item){
    if(item % 2 !== 0){
        return true;
    }
})

console.log(odderNumberList);
console.log(evenNumberList);

let studentList = [
    {
        name : "Mike",
        email : "mike@gmail.com",
        age :18

    },
    {
        
        name : "Daniel",
        email : "daniel@gmail.com",
        age :17
    },
    {
       
        name : "Stacy",
        email : "stacy@gmail.com",
        age :19
    },
    {
       
        name : "Roy",
        email : "roy@gmail.com",
        age :30
    },
    {
       
        name : "Charles",
        email : "charles@gmail.com",
        age :25
    }
]

// let studentsEligibleForParty = studentList.filter((student) => {
//     if(student.age >= 19){
//         return true;
//     }
// })

//Short hand
let studentsEligibleForParty = studentList.filter(student => student.age >= 19 ? true:false)

console.log(studentsEligibleForParty);

//reduce function

let numList = [1,2,3,4,5,7];

//Traditional Way of using for loops
let sumOfNumbers = 0;
for(item of numList){
    sumOfNumbers += item;
}
console.log(sumOfNumbers);

let sum1 = numList.reduce((accumulator, currentValue_item) => {//accumulator is the final output, i.e = sumOfNumber, currentVlaue = numList[i]
    return accumulator + currentValue_item;
},0)//0 is the initial Value

console.log(sum1);

//another exmaple for reduce
//find maximum value of an array
let listOfNum = [20,-20,10,560,0,30];
let maximumValue = listOfNum.reduce(function(acc,cv){
    return acc > cv ? acc : cv;
},-Infinity)

console.log(maximumValue);

//find minimum value of an array
let minimumValue = listOfNum.reduce(function(acc,cv){
    return acc < cv ? acc : cv;
},Infinity)

console.log(minimumValue);

//for in loop

let studentObject={
    name:"Mike",
    email:"mike@gmail.com",
    college:"VCC"
}

for(let key in studentObject){
    console.log(key, ">>>> Key");
    console.log(studentObject[key], ">>>> Value");
}


//find function
let foundStudent = studentList.find((item) => {
    if(item.age === 19){
        return item;
    }
})

console.log(foundStudent);

//splice function- adding an item to the array, removing an item from the array, will modify the original array
let newList = [20,-20,-10,-560,0,30];
newList.splice(0,3,200);//start at 0 position and delete 3 items, and add 200
console.log(newList);

//slice function
let newList2 = [20,-20,-10,-560,0,30];
let slicedValue = newList2.slice(0,3)//start from 0 and get 3items to a new array
console.log(slicedValue);//new array
console.log(newList2);//original array doesnt change