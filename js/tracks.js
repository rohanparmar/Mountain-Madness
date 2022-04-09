let health = document.getElementById("health");
let com = document.getElementById("com");
let edu = document.getElementById("edu");
let sus = document.getElementById("sus");

let healthMobile = document.getElementById("health-mobile");
let comMobile = document.getElementById("com-mobile");
let eduMobile = document.getElementById("edu-mobile");
let susMobile = document.getElementById("sus-mobile");

let tracks = [
  health,
  com,
  edu,
  sus,
  healthMobile,
  comMobile,
  eduMobile,
  susMobile,
];
// let tracksMobile = [];

let lightLabelColor = "#ffc57a";
let darkLabelColor = "#9470ff";
let lightTextColor = "#63594c";
let darkTextColor = "#f9f3e5";

function showModal(track) {
  let dark = false;
  if (document.body.classList.contains("dark-mode")) {
    dark = true;
  }
  document.body.classList.toggle("modal-open");
  document.querySelector("html").style.overflow = "hidden";
  document.getElementById("speakers").style.zIndex = -1;
  let track_id = track.id;
  let modal = document.getElementById(`${track_id}-modal`);
  let description = document.getElementById(`${track_id}-description-text`);
  let resources = document.getElementById(`${track_id}-resources`);
  let questions = document.getElementById(`${track_id}-questions`);
  let label = document.getElementById(`${track_id}-description`);
  if (!track_id.includes("mobile")) {
    description.style.display = "block";
    resources.style.color = dark ? darkTextColor : lightTextColor;
    questions.style.color = dark ? darkTextColor : lightTextColor;
    label.style.color = dark ? darkLabelColor : lightLabelColor;
  }
  modal.style.display = "flex";
}

tracks.forEach((track) => {
  track.addEventListener("click", () => {
    showModal(track);
  });
});

function hide_modal(id) {
  document.body.classList.toggle("modal-open");
  document.querySelector("html").style.overflowY = "scroll";
  document.getElementById("speakers").style.zIndex = 3;
  let modal = document.getElementById(id);
  let hidden = document.getElementsByClassName("modal-hidden");
  for (let i = 0; i < hidden.length; i++) {
    hidden[i].style.display = "none";
  }
  modal.style.display = "none";
}

let modals = document.getElementsByClassName("modal");
for (let i = 0; i < modals.length; i++) {
  let close_button = modals[i].getElementsByClassName("close")[0];
  close_button.addEventListener("click", () => hide_modal(modals[i].id));
  modals[i].addEventListener("click", (e) => {
    if (e.target.classList.contains("modal")) {
      hide_modal(modals[i].id);
    }
  });
}

//navbars
let navbars = document.getElementsByClassName("modal-navbar");
let navbar_labels = document.getElementsByClassName("navbar-txt-track");
for (let i = 0; i < navbars.length; i++) {
  navbars[i].addEventListener("click", (event) => {
    if (event.target.className == "navbar-txt-track") {
      let dark = false;
      if (document.body.classList.contains("dark-mode")) {
        dark = true;
      }
      for (let i = 0; i < navbar_labels.length; i++) {
        navbar_labels[i].style.color = dark ? darkTextColor : lightTextColor;
      }
      event.target.style.color = dark ? darkLabelColor : lightLabelColor;
      show_info(event.target.id);
    }
  });
}

function show_info(id) {
  let hidden = document.getElementsByClassName("modal-hidden");
  for (let i = 0; i < hidden.length; i++) {
    hidden[i].style.display = "none";
  }

  let content = document.getElementById(`${id}-text`);
  content.style.display = "block";
}
