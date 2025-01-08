let alarmTime = null; // Initialize a variable to store the alarm time
let interValId;

const Display = () => {
    alarmTime = document.querySelector("#TimeInput").value; // Store the user's set time
    let setDisInTime = document.querySelector("#AddTimeHare");
    let setAlarmInfo = document.querySelector("#setAlert");
    let song = document.querySelector("#audios");
    let stopbutton = document.querySelector("#Stopbtn");

    setDisInTime.innerHTML = alarmTime;

    let currentDate = new Date();
    let currentHours = currentDate.getHours();
    let currentMinutes = currentDate.getMinutes();
    let currentTime = `${currentHours.toString().padStart(2, "0")}:${currentMinutes.toString().padStart(2, "0")}`;

    stopbutton.style.display = "none";
    
    if (alarmTime === currentTime) {
        setAlarmInfo.innerHTML = "Alarm is Running :";
        song.play();
        stopbutton.style.display = "block";
    } else {
        setAlarmInfo.innerHTML = "";
    }
}

// Stop Alarm Function Hare : 
const stops = () => {
    setTimeout(() => {
        let song = document.querySelector("#audios");
        song.pause();
        let setAlarmInfo = document.querySelector("#setAlert");
        setAlarmInfo.innerHTML = "Alarm Is Stopped :";
        clearInterval(interValId);
    }, 1000);
}


// Snoozz Function In Alarm :


interValId = setInterval(Display, 1000);





















































































































































































