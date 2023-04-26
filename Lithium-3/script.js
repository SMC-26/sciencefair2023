//code for toggling active classes on buttons; taken from W3Schools
var btnContainer = document.getElementById("btn-container");


var btns = btnContainer.getElementsByClassName("topic-btn");

for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

var main_part = document.getElementById("main-part");
var main_desc = document.getElementById("main-desc");
var main_text = document.getElementById("main-text");

main_part.innerHTML = "Part " + document.getElementById("intro-desc").part + ":";
main_desc.innerHTML = document.getElementById("intro-desc").innerHTML;
main_text.innerHTML = document.getElementById("intro").innerHTML;
function showTopic(name) {
    main_part.innerHTML = "Part " + document.getElementById(name + "-desc").part + ":"
    main_desc.innerHTML = document.getElementById(name + "-desc").innerHTML;
    main_text.innerHTML = document.getElementById(name).innerHTML;
}