// Iteration 2: Generate 2 random number and display it on the screen
const num1 = document.getElementById('number1');
const num2 = document.getElementById('number2');
var numberone = Math.round(Math.random() * 100);
num1.innerHTML=numberone;


var numbertwo = Math.round(Math.random() * 100);
num2.innerHTML=numbertwo;


// Iteration 3: Make the options button functionalx`
const button1=document.getElementById('greater-than');
const button2=document.getElementById('equal-to');
const button3=document.getElementById('lesser-than');

var score=0;

button1.onclick =()=>{
    if (numberone>numbertwo){
        score++;
        resetTime(timerId);
    }
    else{
        location.href="./gameover.html";
    }
    numberone = Math.round(Math.random() * 100);
    num1.innerHTML=numberone;
    console.log(score);
    numbertwo = Math.round(Math.random() * 100);
    num2.innerHTML=numbertwo;
}

button2.onclick =()=>{
    if (numberone==numbertwo){
        score++;
        resetTime(timerId);
    }
    else{
        location.href="./gameover.html";
    }
    numberone = Math.round(Math.random() * 100);
    num1.innerHTML=numberone;
    console.log(score);
    numbertwo = Math.round(Math.random() * 100);
    num2.innerHTML=numbertwo;
}

button3.onclick =()=>{
    if (numberone<numbertwo){
        score++;
        resetTime(timerId);
    }
    else{
        location.href="./gameover.html";
    }
    numberone = Math.round(Math.random() * 100);
    num1.innerHTML=numberone;
    console.log(score);
    numbertwo = Math.round(Math.random() * 100);
    num2.innerHTML=numbertwo;


}



// Iteration 4: Build a timer for the game
var time = 5;
var timer = document.getElementById("timer");
var timerId ;

function starttimer(){
    time=5;
    timer.innerHTML = time; 
    timerId = setInterval( ()=> {
        time--;
        if(time==0){
            location.href="./gameover.html"
        }
        timer.innerHTML=time;
    },1000);
 localStorage.setItem("score",score);  
}

function resetTime(intervalId){
         clearInterval(intervalId)
         starttimer();
}
starttimer()


