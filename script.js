function handRotate(e){
    e.target.animate([
        {rotate: "360deg"}
    ],{
        easing: "linear"
    }
    )
}

let today = new Date();
let hour = today.getHours()>12?today.getHours()-12:today.getHours();
let minute = today.getMinutes();
let second = today.getSeconds();
const hourHand = document.getElementsByClassName("hour-hand")[0];
const minuteHand = document.getElementsByClassName("minute-hand")[0];
const secondHand = document.getElementsByClassName("second-hand")[0];
const clock = document.getElementById("clock");
const root = document.documentElement;
let hourAngle = `${hour*(360/12)}deg`
let minuteAngle = `${minute*(360/60)-hour*(360/12)}deg`
    

root.style.setProperty('--secondHandDegree', `${second*(360/60)-90}deg`)
root.style.setProperty('--minuteHandDegree', `${minute*(360/60)-90}deg`)
root.style.setProperty('--hourHandDegree', `${hour*(360/12)-90}deg`)
clock.style.background= `conic-gradient(from ${hourAngle},var(--primary),var(--dark)${minuteAngle},var(--primary)0deg,var(--dark))`;


setInterval(function(){

    today = new Date();
    hour = today.getHours()>12?today.getHours()-12:today.getHours();
    minute = today.getMinutes();
    second = today.getSeconds();
    hourAngle = `${hour*(360/12)}deg`
    minuteAngle = `${minute*(360/60)-hour*(360/12)}deg`
    console.log(hour, hourAngle, minute, minuteAngle)
    clock.style.background= `conic-gradient(from ${hourAngle},var(--primary),var(--dark)${minuteAngle},var(--primary)0deg,var(--dark))`;
    
}
    ,60000
)