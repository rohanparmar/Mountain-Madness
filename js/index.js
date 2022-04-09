document.addEventListener("DOMContentLoaded", function(){
    var darkHrefs = document.querySelectorAll('[data-dark-src]')
    darkHrefs.forEach((elem, idx) => {
        elem.dataset.lightSrc = elem.src
    })
});
let sunAnim;
// Vanilla hover logic for sun/moon selector
let selector = document.getElementById("sun-moon-selector");
selector.addEventListener("mouseover", function() {
    if (selector.src.indexOf("sun") !== -1) {
        selector.style.boxShadow = "0px 0px 30px rgba(255, 153, 0, 0.795)";
        selector.style.cursor = "pointer";
    } else {
        selector.src = "./assets/main/dark/new_glow_moon.svg";
    }
}, false);
selector.addEventListener("mouseleave", function() {
    if (selector.src.indexOf("sun") !== -1) {
        selector.style.boxShadow = "none";
    } else {
        selector.src = "./assets/main/dark/moon.svg";
    }
}, false);

function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    document.getElementById('sun-moon-selector').style.boxShadow = "none";
    var darkHrefs = document.querySelectorAll('[data-dark-src]');
    darkHrefs.forEach((elem, idx) => {
        elem.src = elem.dataset.darkSrc;
    });
    document.getElementById("twt").href="#twitter"; 
    document.getElementById("twt").target="_self";

    let speakerNavbar = document.getElementsByClassName('speakers-tab-button')
    for (let i = 0; i < speakerNavbar.length; i++) {
        if (speakerNavbar[i].src.indexOf("light") != -1) {
            speakerNavbar[i].src = "./assets/main/dark/dark_speakercircle.svg";
        } else {
            speakerNavbar[i].src = "./assets/main/light/speakercircle.svg";
        }
    }

    selectSpeaker(currentSpeaker);
}

function lightMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");

    var lightHrefs = document.querySelectorAll('[data-dark-src]')
    lightHrefs.forEach((elem, idx) => {
        elem.src = elem.dataset.lightSrc
    })
    document.getElementById("twt").href="https://twitter.com/hackmit"; 
    document.getElementById("twt").target="_blank";

    let speakerNavbar = document.getElementsByClassName('speakers-tab-button')
    console.log(speakerNavbar)
    for (let i = 0; i < speakerNavbar.length; i++) {
        if (speakerNavbar[i].src == "./assets/main/dark/dark_speakercircle.svg") {
            speakerNavbar[i].src == "./assets/main/light/speakercircle.svg"
        }
    }

    selectSpeaker(currentSpeaker);
}

let sun = document.getElementById("sun-moon-selector");
const freakInTheSheets = document.getElementById("freak-in-the-sheets");
const animationTime = 2500;

sun.addEventListener('click', () => {
    sun.classList.add("move");
    freakInTheSheets.classList.add("active");
    sun.style.zIndex = "-100";
    setTimeout(function() {
        sun.classList.remove("move");
        sun.style.zIndex = "4";
        freakInTheSheets.classList.remove("active");
    }, animationTime);

    setTimeout(function() {
        if (document.getElementsByClassName('dark-mode').length > 0) {
            lightMode()
            document.getElementById("sun-moon-selector").src = "./assets/main/light/sun.svg";
        } else {
            darkMode();
            document.getElementById("sun-moon-selector").src = "./assets/main/dark/moon.svg";
        }
    }, animationTime * 0.25);
})

let mobileSwitch = document.getElementById("mobile-switch");
mobileSwitch.addEventListener('click', () => {

    setTimeout(function() {
        if (document.getElementsByClassName('dark-mode').length > 0) {
            lightMode()
            document.getElementById("sun-moon-selector").src = "./assets/main/light/sun.svg";
        } else {
            darkMode();
            document.getElementById("sun-moon-selector").src = "./assets/main/dark/moon.svg";
        }
    }, animationTime * 0.25);
})

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

//hamburger menu
var menu = document.getElementById("menu-btn")
var menu_items = document.getElementById("menu-items")
menu.addEventListener('click', () => {
  if(menu.classList.contains("is-active")){
    menu.classList.remove("is-active")
    menu_items.classList.remove("active")
  }
  else {
    menu.classList.add("is-active")
    menu_items.classList.add("active")
  }
})