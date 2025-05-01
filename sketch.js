
let GameState = 1;
let X_Position = 2;
let Y_Position = 2;
let Eventcheck = 0;
let X1 = 1;
let X2 = 1;
let Y1 = 1;
let Y2 = 1;
let Chance;

function preload() {
  U = loadImage("WalkingKris/Up.png")
  U1 = loadImage("WalkingKris/Up_1.png")
  L = loadImage("WalkingKris/Left.png")
  L1 = loadImage("WalkingKris/Left_1.png")
  R = loadImage("WalkingKris/Right.png")
  R1 = loadImage("WalkingKris/Right_1.png")
  D = loadImage("WalkingKris/Down.png")
  D1 = loadImage("WalkingKris/Down_1.png")
  KF = loadImage("Ui/background.png")
}


function setup() {
  createCanvas(450,450)
  background(0)

  let BtnStart = createButton("Begin Simulator").position(75,150).size(300,150)

  BtnStart.mousePressed(start)
//

function start(){
  BtnStart.remove();

  GameState = 2;
  image(D,X_Position*100,Y_Position*100)
}
}



function draw() {

if(GameState == 2){

  if(keyIsDown(LEFT_ARROW)){
    if(Eventcheck==0){
    X_Position -= 1;
    Eventcheck=1;
    if(X_Position<1 ){
      X_Position = 1;
      X1 = 0;
    }
    else{
      X1 = 1;
    }
     setTimeout(()=>{
     Eventcheck=0;
    },700);
    
}
background(0);

if(X_Position >=1 && X1 == 1){
  image(L1,(X_Position*100)+50,Y_Position*100);

  setTimeout(()=>{
    background(0);
    image(L,X_Position*100,Y_Position*100);
  },700);
  Chance = round(random(0,100))
  if(Chance <= 5 ){
    setTimeout(()=>{GameState = 3
    },750);
  }
  
}

else{
  background(0);
  image(L,X_Position*100,Y_Position*100);
  Chance = round(random(0,100))
  if(Chance <= 5 ){
    setTimeout(()=>{GameState = 3
    },750);
  }
}

//image(L,X_Position*100,Y_Position*100);
  }


  if(keyIsDown(RIGHT_ARROW)){
    if(Eventcheck==0){
      X_Position += 1;
      Eventcheck=1;
      if(X_Position>3 ){
        X_Position = 3;
        X2=0
      }
      else{
        X2=1
      }
      }
       setTimeout(()=>{
       Eventcheck=0;
      },700);
      
  
  background(0);

  if(X_Position <=3 && X2==1){
    image(R1,(X_Position*100)-50,Y_Position*100);
  
    setTimeout(()=>{
      background(0);
      image(R,X_Position*100,Y_Position*100);
    },700);
    Chance = round(random(0,100))
    if(Chance <= 5 ){
      setTimeout(()=>{GameState = 3
      },750);
    }
    
    }
   else{
      background(0);
      image(R,X_Position*100,Y_Position*100);
      Chance = round(random(0,100))
      if(Chance <= 5 ){
        setTimeout(()=>{GameState = 3
        },750);
      }
    }
    
  }

  //image(R,X_Position*100,Y_Position*100);
  //}


  if(keyIsDown(DOWN_ARROW)){
    if(Eventcheck==0){
      Y_Position += 1;
      Eventcheck=1;
      if(Y_Position>3 ){
        Y_Position = 3;
        Y1 = 0
      }
      else{
        Y1 = 1
      }
       setTimeout(()=>{
       Eventcheck=0;
      },700);
      
  }
  background(0);
  
  if(Y_Position <=3 && Y1 == 1){
    image(D1,(X_Position*100),(Y_Position*100)-50);
  
    setTimeout(()=>{
      background(0);
      image(D,X_Position*100,Y_Position*100);
    },700);
    Chance = round(random(0,100))
    if(Chance <= 5 ){
      setTimeout(()=>{GameState = 3
      },750);
    }
  }
  else{
    background(0);
    image(D,X_Position*100,Y_Position*100);
    Chance = round(random(0,100))
    if(Chance <= 5 ){
      setTimeout(()=>{GameState = 3
      },750);
    }
  }
  //image(D,X_Position*100,Y_Position*100);
  }
  if(keyIsDown(UP_ARROW)){
    if(Eventcheck==0){
      Y_Position -= 1;
      Eventcheck=1;
      if(Y_Position<1 ){
        Y_Position = 1;
        Y2 = 0;
      }
      else{
        Y2 = 1;
      }
       setTimeout(()=>{
       Eventcheck=0;
      },700);
      
  }
  background(0);
  
  if(Y_Position >=1 && Y2 == 1){
    image(U1,(X_Position*100),(Y_Position*100)+50);
  
    setTimeout(()=>{
      background(0);
      image(U,X_Position*100,Y_Position*100);
    },700);
    Chance = round(random(0,100))
    if(Chance <= 5 ){
      setTimeout(()=>{GameState = 3
      },750);
    }
  }

  else{
    background(0);
    image(U,X_Position*100,Y_Position*100);
   Chance = round(random(0,100))
if(Chance <= 5 ){
setTimeout(()=>{GameState = 3
},300);

}
  }

 // image(U,X_Position*100,Y_Position*100);

 
}  

}

if(GameState == 3){
  background(0)

  //fill(255,255,255)
   // rect(75,325,80,50)

//    fill(185,146,225)
 //   rect(75,325,3,50)
  //  rect(155,325,3,50)
  //  rect(75,325,80,3)
   // rect(75,375,80,3)
   // fill(0,0,0)
   image(KF,75,325)
   fill(255,255,255)
   //du kan lave et check om musen er indenfor området hvor teksten er og så mouseclicked event.
text("Return",130,370)

if(keyCode===71){
  GameState = 2
  background(0);
  image(D,X_Position*100,Y_Position*100);
}
}
}
