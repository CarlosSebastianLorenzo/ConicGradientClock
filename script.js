let today = new Date();
let hour = today.getHours()>12?today.getHours()-12:today.getHours();
let minute = today.getMinutes();
let second = today.getSeconds();
const hourHand = document.querySelector(".hour-hand");
const minuteHand = document.querySelector(".minute-hand");
const secondHand = document.querySelector(".second-hand");
const clock = document.getElementById("clock");
const root = document.documentElement;
let hourAngle = `${hour*(360/12)+(minute*(360/60))/360+(second*(360/60))/360}deg`
let minuteAngle = `${minute*(360/60)+hour*(360/12)/360+90+(second*(360/60))/360}deg`

root.style.setProperty('--secondHandDegree', `${second*(360/60)-90}deg`)
root.style.setProperty('--minuteHandDegree', `${minute*(360/60)-90}deg`)
root.style.setProperty('--hourHandDegree', `${hour*(360/12)-90}deg`)
clock.style.background= `conic-gradient(from ${hourAngle},var(--primary),var(--dark)${minuteAngle},var(--primary)0deg,var(--dark))`;

setInterval(function(){
    today = new Date();
    hour = today.getHours()>12?today.getHours()-12:today.getHours();
    minute = today.getMinutes();
    second = today.getSeconds();
    hourAngle = `${hour*(360/12)+(minute*(360/60))/360+(second*(360/60))/360}deg`
    minuteAngle = `${minute*(360/60)+hour*(360/12)/360+90+(second*(360/60))/360}deg`
    clock.style.background= `conic-gradient(from ${hourAngle},var(--primary),var(--dark)${minuteAngle},var(--primary)0deg,var(--dark))`;
}
    ,1000
)