const nunber1 = document.getElementById("number1")
const nunber2 = document.getElementById("number2")
const nunber3 = document.getElementById("number3")
 nunber1.addEventListener('click', e =>{
   console.log("1")
 })
 nunber2.addEventListener('click', e =>{
   console.log("2")
 })
 nunber3.addEventListener('click', e =>{
   console.log("3")
 })


console.log("hello")

function name (){
     console.log("my function");
};
name();



 function weather (){
    console.log ("this is for weather");
 };
 weather();

 const addNumbers = (num1, num2) => {
   return num1 + num2;
 };

 console.log(addNumbers(5, 3)); 
// 
//  setTimeout(function(){
//   console.log ("hello")
//  },5000);

