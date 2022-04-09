function open(question) {
    let sakura = question.parentElement.firstElementChild;
    let answer = question.parentElement.nextElementSibling;

    sakura.style.animation = "sakura-spin 0.5s linear";
    question.classList.add("clicked");
    answer.style.maxHeight = answer.scrollHeight + "px";
}

function close(question) {
    let sakura = question.parentElement.firstElementChild;
    let answer = question.parentElement.nextElementSibling;

    sakura.style.animation = "sakura-spin-back 0.5s linear";
    question.classList.remove("clicked");
    answer.style.maxHeight = "0"; 
}

// spinning flowers and opening answers when clicking question
let flowers = document.getElementsByClassName('faq-question');

for (let i = 0; i < flowers.length; i++) {
    flowers[i].addEventListener("click", function(e) {        
        if (! flowers[i].classList.contains("clicked")) {
            open(flowers[i]);

            // close other open answers
            for (let j = 0; j < flowers.length; j++) {
                if (i !== j && flowers[j].classList.contains("clicked")) {
                    close(flowers[j]);
                }
            }

        } else {
            close(flowers[i]);
        }        
    })
}


