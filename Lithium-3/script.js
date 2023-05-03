async function addNavbar() {
    const resp = await fetch("https://smc-26.github.io/sciencefair2023/navbar.html");
    const html = await resp.text();
    document.body.insertAdjacentHTML("afterbegin", html);
}

//code for toggling active classes on buttons; taken from W3Schools
var btnContainer = document.getElementById("btn-container");


var btns = btnContainer.getElementsByClassName("topic-btn");

for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}

var main_part = document.getElementById("main-part");
var main_desc = document.getElementById("main-desc");
var main_text = document.getElementById("main-text");

const parts = ["placeholder", "intro", "algaepower", "action", "improvement", "conclusion", "refs", "researchers"];
var current = 1;

main_part.innerHTML = "Part 0" + current + ":";
main_desc.innerHTML = document.getElementById("intro-desc").innerHTML;
main_text.innerHTML = document.getElementById("intro").innerHTML;


function showTopic(index) {
    current = index;
    main_part.innerHTML = "Part 0" + current + ":"
    main_desc.innerHTML = document.getElementById(parts[current] + "-desc").innerHTML;
    main_text.innerHTML = document.getElementById(parts[current]).innerHTML;
}

//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
    ) {
        mybutton.style.visibility = "visible";
        mybutton.style.opacity = "1";
    } else {
        mybutton.style.visibility = "hidden";
        mybutton.style.opacity = "0";
    }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}