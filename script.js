//Initializing button status as false
let btnStatus = false;

//Timing variables Initailization
let time = {
  seconds: 0,
  minutes: 0,
  hours: 0,
  millisecond: 0,
};

let displayTime = {
  displaySeconds: 0,
  displayMinutes: 0,
  displayHours: 0,
  displayMillisecond: 0,
};
//Timing variables Initialization for adding 0 if number is less than
// let displaySeconds = 0;
// let displayMinutes = 0;
// let displayHours = 0;

const startTimer = () => {
  time.millisecond++;
  checkTime();
  formatTime();

  document.getElementById("display-time").innerHTML =
    displayTime.displayHours +
    ":" +
    displayTime.displayMinutes +
    ":" +
    displayTime.displaySeconds +
    ":" +
    displayTime.displayMillisecond;
};

const formatTime = () => {
  if (time.millisecond < 10) {
    displayTime.displayMillisecond = "0" + time.millisecond.toString();
  } else {
    displayTime.displayMillisecond = time.millisecond;
  }
  if (time.seconds < 10) {
    displayTime.displaySeconds = "0" + time.seconds.toString();
  } else {
    displayTime.displaySeconds = time.seconds;
  }
  if (time.minutes < 10) {
    displayTime.displayMinutes = "0" + time.minutes.toString();
  } else {
    displayTime.displayMinutes = time.minutes;
  }
  if (time.hours < 10) {
    displayTime.displayHours = "0" + time.hours.toString();
  } else {
    displayTime.displayHours = time.hours;
  }
};
const checkTime = () => {
  if (time.millisecond / 60 === 1) {
    time.millisecond = 0;
    time.seconds++;
    if (time.seconds / 60 === 1) {
      time.seconds = 0;
      time.minutes++;
      if (time.minutes / 60 === 1) {
        time.minutes = 0;
        time.hours++;
      }
    }
  }
};
const startStop = () => {
  if (btnStatus === false) {
    timeStart = setInterval(startTimer, 10);
    document.getElementById("start-stop").innerHTML = "Stop";
    btnStatus = true;
  } else {
    clearInterval(timeStart);
    document.getElementById("start-stop").innerHTML = "Start";
    btnStatus = false;
  }
};

const restart = () => {
  clearInterval(timeStart);
  time.seconds = 0;
  time.minutes = 0;
  time.seconds = 0;
  document.getElementById("display-time").innerHTML = "00:00:00:00";
  document.getElementById("start-stop").innerHTML = "Start";
};

// //Define vars to hold time values
// let seconds = 0;
// let minutes = 0;
// let hours = 0;

// //Define vars to hold "display" value
// let displaySeconds = 0;
// let displayMinutes = 0;
// let displayHours = 0;

// //Define var to hold setInterval() function
// let interval = null;

// //Define var to hold stopwatch status
// let status = "stopped";

// //Stopwatch function (logic to determine when to increment next value, etc.)
// function stopWatch() {
//   seconds++;

//   //Logic to determine when to increment next value
//   if (seconds / 60 === 1) {
//     seconds = 0;
//     minutes++;

//     if (minutes / 60 === 1) {
//       minutes = 0;
//       hours++;
//     }
//   }

//   //If seconds/minutes/hours are only one digit, add a leading 0 to the value
//   if (seconds < 10) {
//     displaySeconds = "0" + seconds.toString();
//   } else {
//     displaySeconds = seconds;
//   }

//   if (minutes < 10) {
//     displayMinutes = "0" + minutes.toString();
//   } else {
//     displayMinutes = minutes;
//   }

//   if (hours < 10) {
//     displayHours = "0" + hours.toString();
//   } else {
//     displayHours = hours;
//   }

//   //Display updated time values to user
//   document.getElementById("display").innerHTML =
//     displayHours + ":" + displayMinutes + ":" + displaySeconds;
// }

// function startStop() {
//   if (status === "stopped") {
//     //Start the stopwatch (by calling the setInterval() function)
//     interval = window.setInterval(stopWatch, 1000);
//     document.getElementById("startStop").innerHTML = "Stop";
//     status = "started";
//   } else {
//     window.clearInterval(interval);
//     document.getElementById("startStop").innerHTML = "Start";
//     status = "stopped";
//   }
// }

// //Function to reset the stopwatch
// function reset() {
//   window.clearInterval(interval);
//   seconds = 0;
//   minutes = 0;
//   hours = 0;
//   document.getElementById("display").innerHTML = "00:00:00";
//   document.getElementById("startStop").innerHTML = "Start";
// }
