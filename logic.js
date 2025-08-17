function guessNumber(){
    console.log("hello")
    let input=document.querySelector("input");
   
// random Function is created inside the function then everytime the function call the random number is chnage due this we never find the user number is equal to random number
let RandomNumber=Math.floor(Number(Math.random()*10+1));
console.log("random Numbre",RandomNumber);

let userNumber=Number(input.value);
console.log("userNumber",userNumber);

if(userNumber !=RandomNumber){
    // Count Chacnces
    // IF we put c here it always reset values
//     let c=0;
//     if(c<=5){
// document.querySelector(".chances").innerHTML= c++;

//     }

    if( userNumber > RandomNumber){
    document.querySelector(".hint").innerHTML=`Your Number is slightly Greater`
}

else{
    document.querySelector(".hint").innerHTML=`Your Number is slightly Lesser`

}


}
else{
document.querySelector(".hint").innerHTML=`Congrulations, you won in ${c} attempts!`
}


}