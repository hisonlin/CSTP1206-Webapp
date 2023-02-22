//What is API?
//Its an application programable interface

//JSON

let object ={
    name: "Hison",
    age: 30,
    20: "not my age"
}

let stringifiedData = JSON.stringify(object);//string
let parsedData = JSON.parse(stringifiedData);//object

console.log(stringifiedData);
console.log(parsedData);

//URL vs URI

// Fetch API using .then and .catch block
// fetch("https://reqres.in/api/users/2").then((response)=>{
//     let jsonOutput = response.json();
//     console.log (jsonOutput);//You have to return the json object
// }).then((jsonData)=>{
//     console.log(jsonData);//this is the json value returned by reqres server

// }).catch((error) =>{
//     console.log(error);
// })

//Fetch API using async await

async function getUserData(){
    let output = await fetch("https://reqres.in/api/users/2");
    let finalOutputWithJSON = output.json();
    return finalOutputWithJSON;
}
let data = await getUserData();
console.log(data);
