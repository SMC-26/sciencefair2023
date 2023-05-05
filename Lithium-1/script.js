var modal = document.getElementById('first')
var modal = document.getElementById('second')
var modal = document.getElementById('third')
var modal = document.getElementById('fourth')
var modal = document.getElementById('fifth')
var modal = document.getElementById('sixth')
var inside = document.getElementById("contain");

first.onclick = function(){
    modal.style.display = "block";
    inside.src = this.src;
}
second.onclick = function(){
    modal.style.display = "block";
    inside.src = this.src;
}
third.onclick = function(){
    modal.style.display = "block";
    inside.src = this.src;
}
fourth.onclick = function(){
    modal.style.display = "block";
    inside.src = this.src;
}
fifth.onclick = function(){
    modal.style.display = "block";
    inside.src = this.src;
}
sixth.onclick = function(){
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
<<<<<<< HEAD
});
=======
});

function openNav(){
    document.getElementById("mySidebar").style.width = "100px";
    document.getElementById("menu").style.marginRight = "100px";
}
  
function closeNav(){
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("menu").style.marginRight = "0";
}
>>>>>>> parent of 516faf5 (Merge pull request #58 from SMC-26/main)
