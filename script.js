//getting numbers
var one=document.getElementById("1");
var two=document.getElementById("1");
var three=document.getElementById("1");
var four=document.getElementById("1");
var five=document.getElementById("1");
var six=document.getElementById("1");
var seven=document.getElementById("1");
var eight=document.getElementById("1");
var none=document.getElementById("1");
//getting arithemtic operation
var plus=document.getElementById("plus");
var minus=document.getElementById("minus");
var multiply=document.getElementById("multiply");
var divide=document.getElementById("divide");
var equal=document.getElementById("equal");
//
var display=document.getElementByClassName("display");
//display number when clicked
one.addEventListner("click",()=>{
  display.innerHTML="1";
});
