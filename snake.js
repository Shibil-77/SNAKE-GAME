// -1. Variable Declaration.
var cvs = document.getElementById('canvas').getContext('2d')



// -2. OnLoad Function
window.onload = function(){
    mainGame();
}


// -3. Main Game Funtion 
 function mainGame(){
   // game Area 
   
   //backgroung color 
   cvs.fillStyle = 'black';
   cvs.fillRect(0,0,400,400);


   // Grid line

  for(var cl =0 ; cl < 400 ; cl += 20){
    cvs.moveTo(cl, 0);
    cvs.lineTo(cl, 400)
  }

  for(var rl =0 ; rl < 400 ; rl += 20){
    cvs.moveTo(0, rl);
    cvs.lineTo(400, rl)
  }
  cvs.strokeStyle ='gray'
  cvs.stroke();


  // Snake 

 cvs.fillStyle = 'yellow';
 cvs.fillRect(80,80,20,20);

// Fruite 

cvs.fillStyle = 'red';
cvs.fillRect(160,160,20,20);

 }

 


// -4. Input Control 