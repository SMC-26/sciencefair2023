var myGamePiece;

function gamestart(){
    document.getElementById("GPH").style.display = "none";
    document.getElementById("InsHead").style.display = "none";
    document.getElementById("InsText").style.display = "none";
    document.getElementById("Game").style.display = "block";
    const canvas = document.getElementById("Game");
    const ctx = canvas.getContext("2d");
    canvas.width = 800;
    canvas.height = 500;
    myGamePiece = new component(30, 30, "red", 10, 120);
}

/*
var myGamePiece;
var InsertHere = document.getElementById("GameHolder")

function gamestart(){
    document.getElementById("GPH").style.display = "none";
    document.getElementById("InsHead").style.display = "none";
    document.getElementById("InsText").style.display = "none";
    myGamePiece = new component(30, 30, "red", 10, 120);
    myGameArea.start();
}
var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 480;
        this.canvas.height = 270;
        this.context = this.canvas.getContext("2d");
        InsertHere.appendChild()
        this.interval = setInterval(updateGameArea, 20);
    },
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

function component(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;    
    this.update = function(){
        ctx = myGameArea.context;
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}

function updateGameArea() {
    myGameArea.clear();
    myGamePiece.x += 1;
    myGamePiece.update();
}
*/






















function Morb(){
    document.getElementById("Egg").style.display = "inline-block";
    alert("You have found the easter egg!")
}

function reveal(){
    document.getElementById("Fl").style.display = "inline-block";
    document.getElementById("Ev").style.display = "inline-block";
    document.getElementById("Zi").style.display = "inline-block";
    document.getElementById("Ba").style.display = "inline-block";
    document.getElementById("Sa").style.display = "inline-block";
    document.getElementById("Ma").style.display = "inline-block";
    document.getElementById("Cac").style.top = "-70%";
    document.getElementById("Dirt").style.top = "-75%";
}
