const obvserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => obvserver.observe(el));

const sunrisebtn = document.getElementById("05:30");
const noonbtn = document.getElementById("12:00");
const sunsetbtn = document.getElementById("17:30");
const midnightbtn = document.getElementById("00:00");

const sunrisebg = document.getElementById("bg-wrapper-sunrise");
const noonbg = document.getElementById("bg-wrapper-noon");
const sunsetbg = document.getElementById("bg-wrapper-sunset");
const midnightbg = document.getElementById("bg-wrapper-midnight");

var noonopacity = 1;
var sunsetopacity = 0;
var midnightopacity = 0;

const container1 = document.getElementById("container1");
const buttons = document.querySelectorAll(".timebutton");
const btndiv = document.querySelectorAll(".timebuttondiv");
const interactivebardiv = document.getElementById("interactive-bar");
var darkmodergb = 0;

const sunComponents = document.getElementById("sun-components");
var posX = sunComponents.offsetLeft;
var posY = sunComponents.offsetLeft;
var sunopacity = 1;

function sunToNorth() {
    let targetX = 650;
    let targetY = 0;
    var stepX = (targetX - posX) / 30;
    var stepY = (targetY - posY) / 30;

    function move() {
        posX += stepX;
        posY += stepY;
        sunComponents.style.left = posX + "px";
        sunComponents.style.top = posY + "px";
        if ((stepX > 0 && posX >= targetX) || (stepX < 0 && posX <= targetX) ||
            (stepY > 0 && posY >= targetY) || (stepY < 0 && posY <= targetY)) {
          return;
        }
        requestAnimationFrame(move);
      }
      move();
}
function sunToSouthWest() {
    let targetX = 25;
    let targetY = 500;
    var stepX = (targetX - posX) / 30;
    var stepY = (targetY - posY) / 30;
  
    function move() {
      posX += stepX;
      posY += stepY;
      sunComponents.style.left = posX + "px";
      sunComponents.style.top = posY + "px";
      if ((stepX > 0 && posX >= targetX) || (stepX < 0 && posX <= targetX) ||
          (stepY > 0 && posY >= targetY) || (stepY < 0 && posY <= targetY)) {
        return;
      }
      requestAnimationFrame(move);
    }
    move();
}
function sunToSouthEast() {
    if(posX !== 650 && posY !== 0){
        sunToNorth();
        return;
    } 
    else {
        let targetX = 1000;
        let targetY = 800;
        var stepX = (targetX - posX) / 30;
        var stepY = (targetY - posY) / 30;
      
        function move() {
          posX += stepX;
          posY += stepY;
          sunComponents.style.left = posX + "px";
          sunComponents.style.top = posY + "px";
          if ((stepX > 0 && posX >= targetX) || (stepX < 0 && posX <= targetX) ||
              (stepY > 0 && posY >= targetY) || (stepY < 0 && posY <= targetY)) {
            return;
          }
          requestAnimationFrame(move);
        }
        move();    
    }
}
function sunFadeOut() {
    let id = null;

    id = setInterval(sunfadeout, 6);
    function sunfadeout() {
        if (sunopa>=1){
            clearInterval(id);
        } else {
            sunopacity = sunopacity+0.05;
            sunComponents.style.opacity = sunopacity;
        }
    }

}

function setsunrise() {
    if (midnightopacity !== 0){
        removemidnight();
    } 
    if (sunsetopacity !== 0){
        removesunset();
    }
    if (noonopacity !== 0){
        removenoon();
    }
   
    sunrisebtn.style.backgroundColor = "black";
    noonbtn.style.backgroundColor = "rgb(0, 0, 0, 0)";
    sunsetbtn.style.backgroundColor = "rgb(0, 0, 0, 0)";
    midnightbtn.style.backgroundColor = "rgb(0, 0, 0, 0)";

    sunToSouthWest();
}
function setnoon() {
    removedarkmode();

    if (midnightopacity !== 0){
        removemidnight();
    } 
    if (sunsetopacity !== 0){
        removesunset();
    }
    if (noonopacity !== 1){
        addnoon();
    }
       
    sunrisebtn.style.backgroundColor = "rgb(0, 0, 0, 0)";
    noonbtn.style.backgroundColor = "black";
    sunsetbtn.style.backgroundColor = "rgb(0, 0, 0, 0)";
    midnightbtn.style.backgroundColor = "rgb(0, 0, 0, 0)";

    sunToNorth();
}
function setsunset() {  
    removedarkmode();

    if (midnightopacity !== 0){
        removemidnight();
    }
    if (sunsetopacity !== 1){
        addsunset();
    }

    sunrisebtn.style.backgroundColor = "rgb(0, 0, 0, 0)";
    noonbtn.style.backgroundColor = "rgb(0, 0, 0, 0)";
    sunsetbtn.style.backgroundColor = "black";
    midnightbtn.style.backgroundColor = "rgb(0, 0, 0, 0)";

    sunToSouthEast();
}
function setmidnight() {
    if (midnightopacity !== 1){
        addmidnight();
    }

    if (darkmodergb < 255){
        adddarkmode();
    }
    if (sunopacity !== 0){
        sunFadeOut();
    }

    sunrisebtn.style.backgroundColor = "rgb(0, 0, 0, 0)";
    noonbtn.style.backgroundColor = "rgb(0, 0, 0, 0)";
    sunsetbtn.style.backgroundColor = "rgb(0, 0, 0, 0)";
    midnightbtn.style.backgroundColor = "white";
}

function removenoon() {
    let id = null;

    id = setInterval(change1a, 6);
    function change1a() {
        if (noonopacity<=0){
            clearInterval(id);
        } else {
            noonopacity = noonopacity-0.05;
            noonbg.style.backgroundImage = "linear-gradient(rgb(111, 178, 255, "+ noonopacity +"), rgb(135, 191, 255, "+ noonopacity +"), rgb(187, 228, 255, "+ noonopacity +"))";
        }
    }
}
function addnoon() {
    let id = null;

    id = setInterval(change1b, 6);
    function change1b() {
        if (noonopacity>=1){
            clearInterval(id);
        } else {
            noonopacity = noonopacity+0.05;
            noonbg.style.backgroundImage = "linear-gradient(rgb(111, 178, 255, "+ noonopacity +"), rgb(135, 191, 255, "+ noonopacity +"), rgb(187, 228, 255, "+ noonopacity +"))";
        }
    }
}

function removesunset() {
    let id = null;

    id = setInterval(change2a, 6);
    function change2a() {
        if (sunsetopacity<=0){
            clearInterval(id);
        } else {
            sunsetopacity = sunsetopacity-0.05;
            sunsetbg.style.backgroundImage = "linear-gradient(rgb(193, 128, 196, "+ sunsetopacity +"), rgb(176, 155, 185, "+ sunsetopacity +"), rgb(230, 177, 114, "+ sunsetopacity +"), antiquewhite)";
        }
    }
}
function addsunset() {
    let id = null;

    id = setInterval(change2b, 6);
    function change2b() {
        if (sunsetopacity>=1){
            clearInterval(id);
        } else {
            sunsetopacity = sunsetopacity+0.05;
            sunsetbg.style.backgroundImage = "linear-gradient(rgb(193, 128, 196, "+ sunsetopacity +"), rgb(176, 155, 185, "+ sunsetopacity +"), rgb(230, 177, 114, "+ sunsetopacity +"), antiquewhite)";
        }
    }
}

function removemidnight() {
    let id = null;

    id = setInterval(change3a, 6);
    function change3a() {
        if (midnightopacity<=0){
            clearInterval(id);
        } else {
            midnightopacity = midnightopacity-0.05;
            midnightbg.style.backgroundImage = "linear-gradient(rgb(13, 7, 54, "+ midnightopacity +"), rgb(46, 40, 111, "+ midnightopacity +"), rgb(50, 48, 106, "+ midnightopacity +"), antiquewhite)";
            document.getElementById("stars2").style.opacity = midnightopacity;
        }
    }
}
function addmidnight() {
    let id = null;

    id = setInterval(change3b, 6);
    function change3b() {
        if (midnightopacity>=1){
            clearInterval(id);
        } else {
            midnightopacity = midnightopacity+0.05;
            midnightbg.style.backgroundImage = "linear-gradient(rgb(13, 7, 54, "+ midnightopacity +"), rgb(46, 40, 111, "+ midnightopacity +"), rgb(50, 48, 106, "+ midnightopacity +"), antiquewhite)";
            document.getElementById("stars2").style.opacity = midnightopacity;
        }
    }
}

function removedarkmode() {
    let id = null;

    id = setInterval(darken, 6);
    function darken() {
        if (darkmodergb<=0){
            clearInterval(id);
        } else {
            darkmodergb = darkmodergb-10;
            container1.style.color = "rgb("+ darkmodergb +", "+ darkmodergb +", "+ darkmodergb +")";
            interactivebardiv.style.color = "rgb("+ darkmodergb +", "+ darkmodergb +", "+ darkmodergb +")";
            buttons.forEach(timebutton => {
                timebutton.style.border = "3px solid rgb("+ darkmodergb +", "+ darkmodergb +", "+ darkmodergb +")";
            });
            btndiv.forEach(timebuttondiv => {
                timebuttondiv.style.color = "rgb("+ darkmodergb +", "+ darkmodergb +", "+ darkmodergb +")";
            });
        }
    }
}
function adddarkmode() {
    let id = null;

    id = setInterval(lighten, 6);
    function lighten() {
        if (darkmodergb>=255){
            clearInterval(id);
        } else {
            darkmodergb = darkmodergb+10;
            container1.style.color = "rgb("+ darkmodergb +", "+ darkmodergb +", "+ darkmodergb +")";
            interactivebardiv.style.color = "rgb("+ darkmodergb +", "+ darkmodergb +", "+ darkmodergb +")";
            buttons.forEach(timebutton => {
                timebutton.style.border = "3px solid rgb("+ darkmodergb +", "+ darkmodergb +", "+ darkmodergb +")";
            });
            btndiv.forEach(timebuttondiv => {
                timebuttondiv.style.color = "rgb("+ darkmodergb +", "+ darkmodergb +", "+ darkmodergb +")";
            });
        }
    }
}
