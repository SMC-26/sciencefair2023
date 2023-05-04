var modal = document.getElementById('first')
var modal = document.getElementById('second')
var modal = document.getElementById('third')
var modal = document.getElementById('fourth')
var modal = document.getElementById('fifth')
var modal = document.getElementById('sixth')
var inside = document.getElementById("contain");

window.onclick = function(){
    modal.style.display = "block";
    inside.src = this.src;
}
window.onclick = function(){
    modal.style.display = "block";
    inside.src = this.src;
}
window.onclick = function(){
    modal.style.display = "block";
    inside.src = this.src;
}
window.onclick = function(){
    modal.style.display = "block";
    inside.src = this.src;
}
window.onclick = function(){
    modal.style.display = "block";
    inside.src = this.src;
}
window.onclick = function(){
    modal.style.display = "block";
    inside.src = this.src;
}

var span = document.getElementsByClassName("close")[0];


span.onclick = function() { 
  modal.style.display = "none";
}

document.querySelector("#one").addEventListener("click", function(){
    document.querySelector(".modal-content").classList.add("active");
});
document.querySelector(".modal-content .close").addEventListener("click", function(){
    document.querySelector(".modal-content").classList.add("active");
});
