var C3Piece;
var C4Piece;

function GameLoad(){
    const canvas = document.getElementById("Game");
    const ctx = canvas.getContext("2d");
    canvas.width = 800;
    canvas.height = 500;
    C3Piece = new c3(30, 30, "red", 10, 120);
    C4Piece = new c4(30, 30, "blue", 30, 140);
    this.interval = setInterval(updateGameArea, 20);

    function c3(width, height, color, x, y) {
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        context = ctx;
        context.fillStyle = color;
        context.fillRect(this.x, this.y, this.width, this.height);
    }
    function c4(width, height, color, x, y) {
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        context = ctx;
        context.fillStyle = color;
        context.fillRect(this.x, this.y, this.width, this.height);
    }
}
function gamestart(){
    document.getElementById("GPH").style.display = "none";
    document.getElementById("InsHead").style.display = "none";
    document.getElementById("InsText").style.display = "none";
    document.getElementById("Game").style.display = "block";
}
/*
function GameLoad(){
    C3Piece = new c3(30, 30, "red", 10, 120);
    C4Piece = new c4(30, 30, "blue", 30, 140);
    myGameArea.start();
}
var myGameArea = {
    canvas : document.getElementById("Game"),
    start : function() {
        this.canvas.width = 800;
        this.canvas.height = 500;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateGameArea, 20);
    },
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}
*/





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

function Morb(){
    document.getElementById("Egg").style.display = "inline-block";
    alert("You have found the easter egg!")
}