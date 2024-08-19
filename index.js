function updateClock(){
    const timeNow=new Date();
    const hours=timeNow.getHours();
    const minutes=timeNow.getMinutes();
    const seconds = timeNow.getSeconds();



    const time = hours.toString().padStart(2,0) + ":" + minutes.toString().padStart(2,0) + ":" + seconds.toString().padStart(2,0);

    document.getElementById("clock").textContent = time;
}
updateClock();
setInterval(updateClock, 1000);