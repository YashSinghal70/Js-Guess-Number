// random Function is created outside the function because  everytime the function call the random number is not chnage and the user number is equal to random number.
let RandomNumber=Math.floor(Number(Math.random()*10+1));
console.log("random Number",RandomNumber);

// C is Global variable because funtcion can access it.
let c=0;

function guessNumber(){
    console.log("hello")
    let input=document.querySelector("input");
   
// random Function is created inside the function then everytime the function call the random number is chnage due this we never find the user number is equal to random number




let userNumber=Number(input.value);
console.log("userNumber",userNumber);

if((userNumber < 1) || (userNumber > 10 )){
    alert("Enter The Number Betwwn 1 To 10")
}


if(userNumber !=RandomNumber){

if(c <4){
document.querySelector(".chances").innerHTML= ++c;
// stop function and aviod meemory wasteage
// return;

  if( userNumber > RandomNumber){
    document.querySelector(".hint").innerHTML=`Your Number is slightly Greater`
}

else{
    document.querySelector(".hint").innerHTML=`Your Number is slightly Lesser`

}

}
else{
document.querySelector(".chances").innerHTML= `Guess Finshed`;
document.querySelector(".hint").innerHTML=`You Lost ,The Answer was ${RandomNumber} `
// return;
}


  


}
else{
document.querySelector(".hint").innerHTML=`Congrulations, you won in ${c} attempts!`
}


}

function Restart(){
    location.href="index.html"
}