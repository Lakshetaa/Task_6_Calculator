var n1="";
var n2="";
var oper="";
var flag=0;

function append(val){
    if(oper===""){
        n1+=val;
        document.getElementById('result').value=n1;
    }else{
        n2+=val;
        document.getElementById('result').value=n1+oper+n2;
    }
}

function setOperator(op){
    oper+=op;
    document.getElementById('result').value=n1+oper;

}

function showResult(){
    let res=0;
    switch(oper){
        case '+':
            res= parseInt(n1)+parseInt(n2);
            break;
        case '-':
            res= parseInt(n1)-parseInt(n2);
            break;
        case '*':
            res= parseInt(n1)*parseInt(n2);
            break;
        case '/':
            res= parseInt(n1)/parseInt(n2);
            break;     
    }
    document.getElementById('result').value=n1+oper+n2+"="+res;
    document.getElementById('show').innerHTML="RESULT= "+res;    
}

function reset(){
    document.getElementById('result').value="";
    document.getElementById('show').innerHTML="";

    n1="";
    n2="";
    oper="";
}

const body=document.querySelector('table');
const button=document.querySelector('button');
const color=['rgb(13, 243, 209)','rgb(52, 177, 159)','rgb(13, 155, 243)','rgb(13, 101, 243)','rgb(21, 13, 243)','rgb(24, 85, 120)','rgb(102, 180, 244)'];


body.addEventListener("click",function(){
    const colorIndex=parseInt(Math.random()*color.length);
    body.style.backgroundColor=color[colorIndex];
});
