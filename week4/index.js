//Synchronous Behaviour
// console.log("1");
// console.log("2");
// console.log("3");
// console.log("4");
// console.log("5");
// console.log("6");
// console.log("7");


//Asynchronous Behaviour
//setTimeout is function for browser not js
setTimeout(function(){
    console.log("I am printing after 5 seconds...");
}, 5000);

console.log("1");

setTimeout(function(){
    console.log("2");
}, 2000);

console.log("3")

setTimeout(function(){
    console.log("4");
}, 1000);


setTimeout(function(){
    console.log("5");
}, 0);

console.log("6");
//The order of execution of this is
//1,3,6,5,4,2

//setInterval is functionality for browser multiple time
//assign a variable for the function that allow you to stop the loop
let timer = setInterval(function(){
    console.log("say hi after every 2 second");
},2000);

//to stop the loop
//clearInterval(timer);

//set a timer to stop loop
setTimeout(function(){
    clearInterval(timer);
},10000);
//it will execute 4 times

//callback
//callback is a function that is first passed as a parameter to another function and then called later
function greeting(func){
    setTimer(func, 2000);
}

greeting(function(){
    console.log("say Hi");
});
