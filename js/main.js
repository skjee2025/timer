function startTimer(startparam) {
  const hours0 = parseInt(document.getElementById("t1").value || 0, 10);
  const minutes0 = parseInt(document.getElementById("t3").value || 0, 10);
  const seconds0 = parseInt(document.getElementById("t5").value || 0, 10);
  const hours1 = parseInt(document.getElementById("t2").value || 0, 10);
  const minutes1 = parseInt(document.getElementById("t4").value || 0, 10);
  const seconds1 = parseInt(document.getElementById("t6").value || 0, 10);

  const hours = hours0 * 10 + hours1;
  const minutes = minutes0 * 10 + minutes1;
  const seconds = seconds0 * 10 + seconds1;
  console.log(hours);
  console.log(minutes);
  console.log(seconds);
  const totalSeconds = hours * 3600 + minutes * 60 + seconds;

  var remainingSeconds = totalSeconds;
  const intervalId = setInterval(function () {
    const hoursDisplay = addleadingzero(Math.floor(remainingSeconds / 3600));
    const minutesDisplay = addleadingzero(
      Math.floor((remainingSeconds % 3600) / 60)
    );
    const secondsDisplay = addleadingzero(remainingSeconds % 60);

    const secondsdisplay2 = addleadingzero(secondsDisplay);
    console.clear();
    console.log(`${hoursDisplay}:${minutesDisplay}:${secondsDisplay}`);
    document.getElementById(
      "main-timer-id"
    ).innerHTML = `${hoursDisplay}:${minutesDisplay}:${secondsDisplay}`;
    if (remainingSeconds <= 0) {
      clearInterval(intervalId);
      console.log("Timer Finished!");
    } else {
      remainingSeconds--;
    }
  }, 1000);
  document.querySelector(".timer-btn").addEventListener("click", function () {
    clearInterval(intervalId);
  });
  
}
function addleadingzero(number) {
  let numberString = String(number);
  if (numberString.length === 1) {
    numberString = "0" + numberString;
  }
  return numberString;
}
function startmain() {
  startTimer(0);
}
let set_time = null;
let set_intervalid = null;
function startCustomTimer(time) {
  const totalTimeInSeconds2 = parseInt(time, 10);
  let remainingSeconds2 = totalTimeInSeconds2;
  set_time = totalTimeInSeconds2;
  const intervalId = setInterval(function () {
    const minutesDisplay2 = addleadingzero(Math.floor(remainingSeconds2 / 60));
    const secondsDisplay2 = addleadingzero(remainingSeconds2 % 60);

    console.clear();
    document.getElementById(
      "timer-id"
    ).innerHTML = `${minutesDisplay2}:${secondsDisplay2}`;
    if (remainingSeconds2 <= 0) {
      clearInterval(intervalId);
      console.log("1 Minute Timer Finished!");
    } else {
      remainingSeconds2--;
    }
  }, 1000);
  set_intervalid=intervalId;
    document.querySelector(".hidden-btn").addEventListener("click", function () {
    clearInterval(intervalId);
  });
  document.querySelector(".btn1").addEventListener("click", function () {
    clearInterval(intervalId);
  });
  document.querySelector(".btn2").addEventListener("click", function () {
    clearInterval(intervalId);
  });
  document.querySelector(".btn3").addEventListener("click", function () {
    clearInterval(intervalId);
  });
  document.querySelector(".btn4").addEventListener("click", function () {
    clearInterval(intervalId);
  });
  document.querySelector(".btn5").addEventListener("click", function () {
    clearInterval(intervalId);
  });
  document.querySelector(".btn6").addEventListener("click", function () {
    clearInterval(intervalId);
  });
  document.querySelector(".btn7").addEventListener("click", function () {
    clearInterval(intervalId);
  });
}


function gettimeroptions(time2) {
  return time2;
}

window.addEventListener(
  "keydown",
  (event) => {
    console.log(set_time);
    if (set_time == 60){
        document.querySelector('.hidden-btn').click();
        clearInterval(set_intervalid);
        startCustomTimer(60);
        
    }
    else if(set_time == 90){
        document.querySelector('.hidden-btn').click();
        clearInterval(set_intervalid);
        startCustomTimer(90);
    }
    else if(set_time == 120){
        document.querySelector('.hidden-btn').click();
        clearInterval(set_intervalid);
        startCustomTimer(120);
    }
    else if(set_time == 150){
        document.querySelector('.hidden-btn').click();
        clearInterval(set_intervalid);
        startCustomTimer(150);
    }
    else if(set_time == 180){
        document.querySelector('.hidden-btn').click();
        clearInterval(set_intervalid);
        startCustomTimer(180);
    }
    else if(set_time == 210){
        document.querySelector('.hidden-btn').click();
        clearInterval(set_intervalid);
        startCustomTimer(210);
    }
    else if(set_time == 210){
        document.querySelector('.hidden-btn').click();
        clearInterval(set_intervalid);
        startCustomTimer(210);
    }
    else{
        console.log(`KeyboardEvent: key='${event.key}' | code='${event.code}'`);
    }
    
  },
  true
);
