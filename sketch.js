
let X_Position = 2;
let Y_Position = 2;
let Eventcheck = 0;

function preload() {
  U = loadImage("WalkingKris/Up.png")
  U1 = loadImage("WalkingKris/Up_1.png")
  L = loadImage("WalkingKris/Left.png")
  L1 = loadImage("WalkingKris/Left_1.png")
  R = loadImage("WalkingKris/Right.png")
  R1 = loadImage("WalkingKris/Right_1.png")
  D = loadImage("WalkingKris/Down.png")
  D1 = loadImage("WalkingKris/Down_1.png")
 

}


function setup() {
  createCanvas(450,450)
  background(0)
image(D,X_Position*100,Y_Position*100)
}



function draw() {

  if(keyIsDown(LEFT_ARROW)){
    if(Eventcheck==0){
    X_Position -= 1;
    Eventcheck=1;
    if(X_Position<=1 ){
      X_Position = 1;
    }
     setTimeout(()=>{
     Eventcheck=0;
    },300);
    
}
background(0);

if(X_Position >=1){
  image(L1,(X_Position*100)+50,Y_Position*100);

  setTimeout(()=>{
    background(0);
    image(L,X_Position*100,Y_Position*100);
  },400);
}

//image(L,X_Position*100,Y_Position*100);
  }


  if(keyIsDown(RIGHT_ARROW)){
    if(Eventcheck==0){
      X_Position += 1;
      Eventcheck=1;
      if(X_Position>=3 ){
        X_Position = 3;
      }
       setTimeout(()=>{
       Eventcheck=0;
      },300);
      
  }
  background(0);

  if(X_Position <=3){
    image(R1,(X_Position*100)-50,Y_Position*100);
  
    setTimeout(()=>{
      background(0);
      image(R,X_Position*100,Y_Position*100);
    },400);
  }

  //image(R,X_Position*100,Y_Position*100);
  }


  if(keyIsDown(DOWN_ARROW)){
    if(Eventcheck==0){
      Y_Position += 1;
      Eventcheck=1;
      if(Y_Position>=3 ){
        Y_Position = 3;
      }
       setTimeout(()=>{
       Eventcheck=0;
      },300);
      
  }
  background(0);
  
  if(Y_Position <=3){
    image(D1,(X_Position*100),(Y_Position*100)-50);
  
    setTimeout(()=>{
      background(0);
      image(D,X_Position*100,Y_Position*100);
    },400);
  }
  
  //image(D,X_Position*100,Y_Position*100);
  }
  if(keyIsDown(UP_ARROW)){
    if(Eventcheck==0){
      Y_Position -= 1;
      Eventcheck=1;
      if(Y_Position<=1 ){
        Y_Position = 1;
      }
       setTimeout(()=>{
       Eventcheck=0;
      },300);
      
  }
  background(0);
  
  if(Y_Position >=1){
    image(U1,(X_Position*100),(Y_Position*100)+50);
  
    setTimeout(()=>{
      background(0);
      image(U,X_Position*100,Y_Position*100);
    },400);
  }

  image(U,X_Position*100,Y_Position*100);
  }
}
