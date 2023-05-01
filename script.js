function handRotate(e){
    e.target.animate([
        {rotate: "360deg"}
    ],{
        easing: "linear"
    }
    )
}

const today = new Date();
const hour = today.getHours()>12?today.getHours()-12:today.getHours();
const minute = today.getMinutes();
const second = today.getSeconds();
const hourHand = document.getElementsByClassName("hour-hand")[0];
const minuteHand = document.getElementsByClassName("minute-hand")[0];
const secondHand = document.getElementsByClassName("second-hand")[0];
const clock = document.getElementById("clock");
const root = document.documentElement;

root.style.setProperty('--secondHandDegree', `${second*(360/60)-90}deg`)
root.style.setProperty('--minuteHandDegree', `${minute*(360/60)-90}deg`)
root.style.setProperty('--hourHandDegree', `${hour*(360/12)-90}deg`)