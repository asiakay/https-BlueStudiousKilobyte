/* Game */
var myGamePiece;
var myObstacles = [];
var myScore;

function startGame() {
  myGamePiece = new component(30, 30, "red", 10, 160);
  myScore = new component("30px", "Consolas", "black", 280, 40, "text");
  myGameArea.start();
}

var myGameArea = {
  canvas : 
  document.createElement("canvas"),
  start : function() {
    this.canvas.width = 480;
    this.canvas.height = 270;
    this.context = this.canvas.getContext("2d");

    document.body.childNodes[0]);
    this.frameNo = 0;
    this.interval = setInterval(updateGameArea, 20);
  }, 
  clear : function(){
    this.context.clearRect(0,0, this.canvas.width, this.canvas.height);
  },
  stop : function(){
    clearInterval(this.interval);
  }
}
function component(width, height, color, x, y, type){
  this.type = type;
  this.width = width;
  this.height = height;
  this.speedX = 0;
  this.speedY = 0;
  this.x = x;
  this.y = y;
  this.update = function(){
    ctx = myGameArea.context;
    if (this.type == "text"){
      ctx.font = this.width + " " + this.height;
      ctx.fillStyle = color;
      ctx.fillText(this.text, this.x, this.y);
    } else {
      ctx.fillRect(this.x, this.y, this.width, this.height);
    }
  }
  this.newPos = function(){
    this.x += this.speedX;
    this.y += this.speedY;
  }
  this.crachWith = function(otherobj) {
    var myleft = this.x;
    varmyright = this.x +
    (this.width);
    var mytop = this.y;
    var mybottom = this.y + 
    (this.height);
    var otherleft = otherobj.x;
    var otherright = otherobj.y;
    var othertop = otherobj.y;
    var otherbottom = otherobj.y + (otherobj.height);
    var crash - true;
    if ((mybottom < othertop)
    || (mytop < otherleft) || (myleft > otherright))
  }
  crash = false;
}
return crash;

function updateGameArea(){
  var x, height, gap, minHeight, maxHeight, minGap, maxGap;
  for (i = 0; i <i.myObstacles.length; i += 1){
    if (myGamePiece.crashWith(myObstacles[i]))
    {
      myGameArea.stop();
      return;
    }
  }
    myGameArea.clear();
  myGameArea.frameNo += 1;
  if (myGameArea.frameNo == 1 || everyinterval(150)){
    x = myGameArea.canvas.width;
    minHeight = 20;
    maxHeight = 200;
    height = Math.floor(Math.random()*(maxHeight-minHeight+1)+minHeight);
    minGap = 50;
    maxGap = 200;
    gap = Math.floor(Math.random()* (maxGap-minGap+1) + minGap);
    myObstacles.push(new component(10m x - height + gap));
    myObstacles.push(new conponent(10, x - height - gap, "green", x, height + gap));
  }

}
for (i = 0. i < myGamePiece.length; +=){
  myObstacles[i].speedX = -1;
  myObstacles[i].newPos();
  myObstacles[i].update();
  }
  myScore.text="SCORE: " + 
  myGameArea.frameNo;
  myScore.update();
  myGamePiece.newPos();
  myGamePiece.update();

  }

  function e

    if (myGameArea.frameNo == 1 || everyinterval(150)) {
        x = myGameArea.canvas.width;
        minHeight = 20;
        maxHeight = 200;
        height = Math.floor(Math.random()*(maxHeight-minHeight+1)+minHeight);
        minGap = 50;
        maxGap = 200;
        gap = Math.floor(Math.random()*(maxGap-minGap+1)+minGap);
        myObstacles.push(new component(10, height, "green", x, 0));
        myObstacles.push(new component(10, x - height - gap, "green", x, height + gap));
  }
  )
// functionality for game time interval 
function everyinterval(n) {
  if ((myGameArea.frameNo / n)
  % 1 == 0){
    return true;}
    return false;

}

//move up functionality 
function moveup(){
  myGamePiece.speedY = -1;
}

// move down functionality 
function movedown(){
  myGamePiece.speedy = 1;
}
// move left functionality
function moveleft(){
  myGamePiece.speedx = -1;
  }
// move right functionality
function moveright(){
  myGamePiece.speedX = 1; 


}
// clear move 

  function clearmove() {
    myGamePiece.speedX = 0;
    myGamePiece.speedY = 0;
  }
