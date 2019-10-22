var display=document.querySelector(".display input");
function clicked(element){
    let num=display.value;
  //isNan=not a number=>trueなので注意
    if (element.id==="delete_one"){
      num=num.slice(0,-1);
    }else if (element.id==="delete_all"){
      num="";
    }else if (element.id==="equal"){
      //eval超便利=stringの中身をプログラムとして認識してくれる
      //ex) "1+1"を1+1と認識して2を返す
      //  /x/g-regex expression =select all "x" in strig, /"x"/としなくていい
      num=num.replace(/×/g,"*");
      num=num.replace(/÷/g,"/");
      console.log(num);
      num=eval(num).toString();
    }else {
        num=num+element.innerHTML;
    }
    display.value=num;
    console.log(num);
}
