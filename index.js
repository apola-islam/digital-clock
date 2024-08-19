function updateClock(){
    const timeNow=new Date();
    const hours=timeNow.getHours();
    let meridien;
    hours > 12 ? meridien = " PM": meridien = " AM"
    const minutes=timeNow.getMinutes();
    const seconds = timeNow.getSeconds();
    const time = Math.abs(hours-12).toString().padStart(2,0) + ":" + minutes.toString().padStart(2,0) + ":" + seconds.toString().padStart(2,0) + meridien;
    document.getElementById("clock").textContent = time;
}
updateClock();
setInterval(updateClock, 1000);