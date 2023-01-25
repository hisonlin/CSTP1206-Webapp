// An object is date structure where you can sace values in the form of key and values

let student ={
    name:"Daniel",
    email:"daniel@gmail.com",
    age:28,
    address:{
        city: "Vancouver",
        province: "BC"
    },
    courses: ["CST-1206", "CST_1204"],
    speaks: function(){
        console.log("HI!");
    },
    getName: ()=>{
        console.log(this.name)
    }
}

console.log(student.address.city);
student.speaks();
student.getName();