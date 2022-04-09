let currentSpeaker = 0;

let speakerTabs = document.getElementsByClassName("speakers-tab");
let tabButtons = document.getElementsByClassName("speakers-tab-button");
let tabButtonsNav = document.getElementById("speakers-tab-buttons");

const shortCycleTime = 8000;
const longCycleTime = 20000;

let slidesInterval;

while (tabButtonsNav.childElementCount < speakerTabs.length) {
  const tabButton = document.createElement("img");
  tabButton.src = "./assets/main/light/speakercircle.svg";
  tabButton.className = "speakers-tab-button";
  tabButtonsNav.appendChild(tabButton);
}

function selectSpeaker(index) {
  let darkMode = document.body.classList.contains('dark-mode');

  currentSpeaker = Math.max(0, Math.min(index, speakerTabs.length - 1));
  for (let i = 0; i < tabButtons.length; i++) {
    if (darkMode) {
      tabButtons[i].src = "./assets/main/dark/dark_speakercircle.svg";
    } else {
      tabButtons[i].src = "./assets/main/light/speakercircle.svg";
    }

    speakerTabs[i].style.opacity = "0.0";
    tabButtons[i].classList.remove("active");
  }

  if (darkMode) {
    tabButtons[currentSpeaker].src = "./assets/main/dark/dark_sakura_no_noise.svg";
  } else {
    tabButtons[currentSpeaker].src = "./assets/main/light/sakura_no_noise.svg";
  }
  tabButtons[currentSpeaker].classList.add("active");

  speakerTabs[currentSpeaker].style.opacity = "1.0";
}

function advanceSpeaker() {
  selectSpeaker((currentSpeaker + 1) % speakerTabs.length);
  setCycleInterval(shortCycleTime);
}

function setCycleInterval(delay) {
  clearInterval(slidesInterval);
  slidesInterval = setInterval(() => {
    advanceSpeaker();
  }, delay);
}

setCycleInterval(shortCycleTime);

selectSpeaker(currentSpeaker);

for (let i = 0; i < tabButtons.length; i++) {
  let tabButton = tabButtons[i];

  tabButton.onclick = function () {
    selectSpeaker(i);

    setCycleInterval(longCycleTime);
  };
}