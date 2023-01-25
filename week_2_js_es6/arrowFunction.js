function greeting(){
    console.log("Hi How are you?");
}

greeting();

const sum = () => {
    console.log(2+1);
}

sum();


sumify();//referential error
let sumify = () =>{
    console.log(2 * 3);
}

//short hand
let sumifys =(a,b)=>a+b;