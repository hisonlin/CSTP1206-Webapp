//This is how we create an instance of Promise
//Here we are resolving it ,which means the response we fulfilled
let promise = new Promise(function(resolve, reject){
    resolve("Transation Approved!");//That the promise resolved succesfully!
})


//This is how we create an instance of Promise
//Here we are rejecting it ,which means the response we rejected
// let promise1 = new Promise(function(resolve, reject){
//     reject("Transation Declined");//That the promise got rejected!
// })


//promise resolve and reject work togother
let balance  = 1000;
let promise3 = new Promise(function(resolve,reject){
    let burberrySuitPrice = 1200;
    console.log("Trying to do a transaction more than $1000, buy a burberry suit")

    balance = balance - burberrySuitPrice //-200

    if (balance > 0){
        resolve("Transaction Successful");
    }
    else{
        reject("Partial Transaction Completed, Use another card to complete the transaction")
    }

})

promise3.then(function(response){//return resolve
    console.log(response);
}).catch(function(error){//return reject
    console.log(error);
})

let number = 100;

let evenPromise = new Promise(function(resolve,reject){
    if(number % 2 === 0){
        let successResponse = {
            message: "Succesfully divisible by 2",
            isEven: true
        }
        resolve(successResponse);
    }else{
        let errorResponse = {
            message: "Not divisible by 2",
            isEven: false
        }
        reject(errorResponse);
    }
})

evenPromise.then(function(response){//return resolve
    console.log(response);
}).catch(function(error){//return reject
    console.log(error);
})

let num =4;
let newPromise = new Promise(function(resolve,reject){
    resolve(num);
    reject(num);
})

newPromise.then(function(response){
    console.log(response);
}).catch(function(error){
    console.log(error);
})
//if both fulfill resolve and reject, just return resolve

//ASYNC AWAIT, another way to wait for the promise
//evenPromise

async function checkEvenNumber(){
    //FIRST WAY
    // evenPromise.then(function(response){//return resolve
    //     console.log(response);
    // }).catch(function(error){//return reject
    //     console.log(error);
    // })

    //SECOND WAY
    let response = await evenPromise
    console.log(response);
}