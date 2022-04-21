
let date_of_event = new Date("Apr 29, 2022 18:00:00").getTime();

setInterval(function() 
{
  let current_time = new Date().getTime();  
  var difference = date_of_event - current_time;

  var days_left = Math.floor(difference / (1000 * 60 * 60 * 24));
  var hours_left = Math.floor((difference% (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes_left = Math.floor((difference% (1000 * 60 * 60)) / (1000 * 60));
  var seconds_left = Math.floor((difference% (1000 * 60)) / 1000);

  let data = [0, 0, 0, 0]

  if(date_of_event>current_time)
  {
    data = [days_left,hours_left,minutes_left,seconds_left];

  }


  let timeElements = document.querySelectorAll(".footer-timeNum");

  for (let i = 0 ; i<data.length;i++)
  {
    timeElements[i].innerText = data[i].toString(); 
  }
}, 1000);

function open(question) 
{
    let answer = question.parentElement.nextElementSibling;
    question.classList.add("clicked");
    answer.style.maxHeight = answer.scrollHeight + "px";
}

function close(question) 
{
    let answer = question.parentElement.nextElementSibling;
    question.classList.remove("clicked");
    answer.style.maxHeight = "0"; 
}

let details = document.getElementsByClassName('faq-question');

for (let i = 0; i < details.length; i++) 
{
    details[i].addEventListener("click", function(e) 
    {
        if (! details[i].classList.contains("clicked")) 
        {
            open(details[i]);
        } 
        else 
        {
            close(details[i]);
        }        
    })
}



