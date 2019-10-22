//getting numbers
var one=document.getElementById("1");
var two=document.getElementById("2");
var three=document.getElementById("3");
var four=document.getElementById("4");
var five=document.getElementById("5");
var six=document.getElementById("6");
var seven=document.getElementById("7");
var eight=document.getElementById("8");
var nine=document.getElementById("9");
//getting arithemtic operation
var plus=document.getElementById("plus");
var minus=document.getElementById("minus");
var multiply=document.getElementById("multiply");
var divide=document.getElementById("divide");
var equal=document.getElementById("equal");
var erase=document.getElementById("delete");
//
var display=document.getElementsByClassName("display");
//display number when clicked
var formula="";
//when number button is clicked
one.addEventListener("click",()=>{
  formula=formula+"1";
  display[0].innerHTML=formula;
});
two.addEventListener("click",()=>{
  formula=formula+"2";
  display[0].innerHTML=formula;
});
three.addEventListener("click",()=>{
  formula=formula+"3";
  display[0].innerHTML=formula;
});
four.addEventListener("click",()=>{
  formula=formula+"4";
  display[0].innerHTML=formula;
});
five.addEventListener("click",()=>{
  formula=formula+"5";
  display[0].innerHTML=formula;
});
six.addEventListener("click",()=>{
  formula=formula+"6";
  display[0].innerHTML=formula;
});
seven.addEventListener("click",()=>{
  formula=formula+"7";
  display[0].innerHTML=formula;
});
eight.addEventListener("click",()=>{
  formula=formula+"8";
  display[0].innerHTML=formula;
});
nine.addEventListener("click",()=>{
  formula=formula+"9";
  display[0].innerHTML=formula;
});
//when arithemtic button is clicked
plus.addEventListener("click",()=>{
  formula=formula+"+";
  display[0].innerHTML=formula;
});
minus.addEventListener("click",()=>{
  formula=formula+"-";
  display[0].innerHTML=formula;
});
multiply.addEventListener("click",()=>{
  formula=formula+"×";
  display[0].innerHTML=formula;
});
divide.addEventListener("click",()=>{
  formula=formula+"÷";
  display[0].innerHTML=formula;
});
equal.addEventListener("click",()=>{
  let numberList=formula.split(/[\+\-×÷]/);
  let a=1;//index for selecting number from list
  let result=parseInt(numberList[0]);
  let len=formula.length;
  for (let i=0;i<len;i=i+1){
      if (formula[i]==="+"){
          let num=parseInt(numberList[a]);
          result=result+num;
          a=a+1;
      }else if (formula[i]==="-"){
          let num=parseInt(numberList[a]);
          result=result-num;
          a=a+1;
      }else if (formula[i]==="×"){
          let num=parseInt(numberList[a]);
          result=result*num;
          a=a+1;
      }else if (formula[i]==="÷"){
          let num=parseInt(numberList[a]);
          result=result/num;
          a=a+1;
      }else{ continue}
  }
  //because additional operation will apply on formula
  //set formula to result
  formula=result;
  display[0].innerHTML=formula;
});
erase.addEventListener("click",()=>{
  formula=String(formula).slice(0,-1);
  display[0].innerHTML=formula;
});
