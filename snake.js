// -1. Variable Declaration.
const cvs = document.getElementById('canvas').getContext('2d')
let sPosx =80;
let sPosy =80;
let nPosx =0;
let nPosy =0;
let fPosx =160;
let fPosy =160;
let snakeTail = [];
let snakeSize =1 ;


// -2. OnLoad Function
window.onload = function () {
    document.addEventListener('keydown', inputControl);
    setInterval(mainGame,200);
}


// -3. Main Game Funtion 
function mainGame() {

//move snake

    sPosx  += nPosx
    sPosy += nPosy

  // control Snake Monement
  
  if(sPosx>400){
    sPosx =0;
  }
  if(sPosy>400){
    sPosy =0;
  }
  if(sPosx<0){
    sPosx =400;
  }
  if(sPosy<0){
    sPosy = 400;
  }

// <---=====game Area====--> 

//backgroung color 

    cvs.fillStyle = 'black';
    cvs.fillRect(0, 0, 400, 400);


    // Grid line

    for (var cl = 0; cl < 400; cl += 20) {
        cvs.moveTo(cl, 0);
        cvs.lineTo(cl, 400)
    }

    for (var rl = 0; rl < 400; rl += 20) {
        cvs.moveTo(0, rl);
        cvs.lineTo(400, rl)
    }
    cvs.strokeStyle = 'gray'
    cvs.stroke();


    // Snake 

    cvs.fillStyle = 'yellow';
    
    for (let i = 0; i < snakeTail.length; i++) {
      cvs.fillRect(
        snakeTail[i].x,snakeTail[i].y,20,20
      );   
    }

    // Fruite 

    cvs.fillStyle = 'red';
    cvs.fillRect(fPosx, fPosy, 20, 20);

    //if snake eat fruit
   
 if(sPosx == fPosx && sPosy ==fPosy){
    snakeSize++;
    fPosx =Math.floor(Math.random()*20)*20
    fPosy =Math.floor(Math.random()*20)*20
   }
   snakeTail.push({x:sPosx,y:sPosy})
   while(snakeTail.length>snakeSize){
    snakeTail.shift();
   }
}




// -4. Input Control 

function inputControl(e) {

    switch (e.keyCode) {
        case 38:
            //up
            nPosy-=20
            nPosx =0;
            break;
        case 40:
            //down
           nPosy += 20
           nPosx =0;
            break;
        case 39:
            //right
            nPosx += 20;
            nPosy =0;
            break;
        case 37:
            //left
            nPosx -=20
            nPosy =0;
            break
    }

}