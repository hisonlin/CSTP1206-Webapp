//Callbacks

function greeting(fn){
    fn();
}

greeting(function() {console.log("Hey!")});

let array = [1,2,3,4,5];

for (let i = 0; i < array.length; i++){
    console.log(array[i]);
}


//For each function - iterates just like the above function(for loop)
array.forEach((item, index) => {
    console.log(item + " " + index);//array[i]
})


//Map function
let modifiedArray = array.map((item) => {
    return item *2
})

console.log(modifiedArray);

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