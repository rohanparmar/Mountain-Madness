//countdown_time 
let countDownDateTime = new Date("Apr 29, 2022 18:00:00").getTime();
// 1 second update
setInterval(function() {
  let timeNow = new Date().getTime();  
  var timeDiff = countDownDateTime - timeNow;
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  var hours = Math.floor((timeDiff% (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((timeDiff% (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeDiff% (1000 * 60)) / 1000);
  let times = [days,hours,minutes,seconds];
  let timeElements = document.querySelectorAll(".footer-timeNum");
  for (let i = 0 ; i<times.length;i++){
    timeElements[i].innerText = times[i].toString(); 
  }
}, 1000);
