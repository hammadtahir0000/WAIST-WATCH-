const houreEL = document.querySelector(".houre")
const minutesEL = document.querySelector(".minutes")
const secondEL = document.querySelector(".second")


function updateclock() {
    const currentDate = new Date();
    setTimeout(updateclock, 1000);
    const houre = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const second = currentDate.getSeconds();

    const houreDeg = (houre/ 12) * 360;
    houreEL.style.transform = `rotate(${houreDeg}deg)`;



    const minutesDeg = (minutes / 60) * 360;
    minutesEL.style.transform = `rotate(${minutesDeg}deg)`;


    const secondDeg = (second / 60) * 360;
    secondEL.style.transform = `rotate(${secondDeg}deg)`;


}



















updateclock()