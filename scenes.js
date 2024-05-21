
// =============================================================
// =                         BEGIN SCENES                      =
// =============================================================


////////////////////////////// 1 /////////////////
function splash()  {
    /*var textX;
    var textY;
    var loy= 0;  // exists as data saved when in the splash scene
    let btnevent1 =false;
    let btnevent2 =false;

    // scene1.setup
    this.setup = function() {
      console.log("We are at setup for splash");
      // do all stuff you want to initialize things,
      // as this it need to be called only once.
      outputVolume(.15);  // turn down the volume.
    }

    // enter() will be called each time SceneManager switches
    // to this scene
    this.enter = function()  {
        console.log("We are at entering splash");
        background("grey");
        textAlign(CENTER);
        textSize(30);
        noStroke();

        // reset or disable the other scenes and their stuff
        // turn off the other scene stuff
        snd1.stop();
        // make sure ghost is gone from this scene
        ghosty.visible = false;
      

    }


    this.draw = function()
    {
      background("lightblue");
      // this is the draw function for all p5.play commands
     
      fill(200,150,0);
      ellipse(width/2,height/2+150,260,220);
      fill(0,120,200);
      rect(-5,height-170,width+5,170);
      
        push();
        
        translate(width/2,loy-100);
        fill(10,200,160);
        text("Splash Down!",0,-120);
        ellipse(0,0,80,140);


        if (loy > height-140) {
          loy = 0;
        }
         loy++;

        pop();
    
   
                             // title,lx,ly, btnW, btnH, upcolor, rollcolor, downcolor
      btnevent1 = checkButtonPress("Help",width-150,height-70,100,40,color(220,100,100),color(100),color(250));  
      if (btnevent1) { // help
        btnevent1 = false;
        this.sceneManager.showScene( help );
      }
                            // title,lx,ly, btnW, btnH, upcolor, rollcolor, downcolor
      btnevent2 = checkButtonPress("Start Here",width/2-60,height-140,120,40,color(120,180,100),color(100),color(250));
      if (btnevent2) {   // main or next scene
        btnevent2 = false;
         playshortsound();
         this.sceneManager.showNextScene();
      }

    }

    this.keyPressed = function() {
        fill(0,255,0);
        text(keyCode, textX, textY += 10);

        if ( textY > height )  {
            textX += 20;
            textY = 0;
        }
    }

    this.mousePressed = function() {

     
    }*/
}

///////////////////////  2  ////////////////////////

function main()  {
   this.y = 0;
   let state = 1;
   let bgX1;
   let bgX2;
   
   let song, volume;
   /* // var y = 0;
    this.lox = 50;
    // var lox = 50;

   this.loy = 120;
   // var loy = 120;*/
    let mouseTap = false;
    
    let idle = false;
   let btnevent1 = false;
   let door = false;
   let bookshelf = false;
   let clock = false;
   let calendar = false;
   let piano = false;
   let couch = false;
   let plant = false;
   let smColor ;

    let Font = loadFont("fonts/digital-7.ttf");
  this.setup = function() {
      console.log("We are at setup for main");
      frameRate(30);
      // make sure ghost is gone from this scene
      textFont(Font);
      bgX1 = 0;
      bgX2 = 500;
      noStroke();
      smColor =  color(0,0,0,0);
      outputVolume(.05);
      song = s3_space;
  }

  this.enter = function()
  {
      
    console.log("We are at entering main");
    spaceman.position.x = 50;
    spaceman.position.y = 80;
    spaceman.position.x =  width/2;
    spaceman.position.y =  height/2;
    spaceman.visible = false;
    spaceman.changeAnimation("idle");
    
    //plays audio
    if ( !song.isPlaying() ) {
      song.play();
   }


  }



    
    this.draw = function() {
      
      image(space, bgX1, 0, 750, 500);
      image(space,bgX1+750,0,750,500)
    image(livingR,0,0,750, 500);
   
        switch (state){
            case 1:
                spacemanPrint(400, 250, smColor, "idle");
                
                break;
            case 2:
                spacemanPrint(640, 275, smColor, "couch");
                tint(0,0,0,0);
                blendMode(OVERLAY);
                spaceman.draw();
                blendMode(NORMAL);
                tint(255);
                break;
            case 3:
                spacemanPrint(200, 200, smColor, "clock");
                fill(255);
                rect(365,40,200,200);
                fill(250, 160, 40);
                rect(380, 60, 170, 30);
                rect(380, 190, 170, 30);
                textAlign(CENTER, CENTER);
                textSize(width/10);
                text(hour()+":"+minute(),465,140);
                break;
            case 4:
                spacemanPrint(218, 207, smColor, "calendar");
                fill(255);
                rect(365,40,200,200);
                fill(250, 160, 40);
                rect(380, 55, 170, 20);
                rect(380, 210, 170, 20);
                textAlign(CENTER, CENTER);
                textSize(width/10);
                text(day()+"/"+month(),465,110);
                text(year(),465,170);
                break;
            case 5:
                spacemanPrint(218, 207, smColor, "clothes");
                let orange, red, blue, green;
                orange = checkButtonPress("",410,90,
                    40,40,color(255, 160, 43),color(233, 122, 30),color(255, 203, 161));
                if (orange) {
                    smColor = color(0,0,0,0);
                    orange = false;

                }
                red = checkButtonPress("",490,90,
                    40,40,color(255, 50, 40),color(230, 30, 30),color(255, 100, 90));
                if (red) {
                    smColor = color(255, 50, 40);
                    red = false;

                }
                blue = checkButtonPress("",410,170,
                    40,40,color(155, 245, 90),color(130, 210, 75),color(170, 355, 100));
                if (blue) {
                    smColor = color(155, 245, 90);
                    blue = false;

                }
                green = checkButtonPress("",490,170,
                    40,40,color(100, 140, 234),color(80, 120, 210),color(120, 140, 155));
                if (green) {
                    smColor = color(100, 140, 234);
                    green = false;

                }
                break;
            case 6:
                fill(255);
                rect(410,40, 150, 200)
                stroke(0);
                let b1_parlor, b2_mii, b3_space, b4_lease,b5_wii;
                b1_parlor = checkButtonPress("",410,60,
                    150,20,color(255,255,255),color(233, 122, 30),color(255, 203, 161));
                if (b1_parlor) {
                    song.stop();
                    song = s1_parlor;
                    b1_parlor = false;

                }
                b2_mii = checkButtonPress("",410,100,
                    150,20,color(255,255,255),color(233, 122, 30),color(255, 203, 161));
                if (b2_mii) {
                    song.stop();
                    song = s2_mii;
                    b2_mii = false;

                }
                b3_space = checkButtonPress("",410,140,
                    150,20,color(255),color(233, 122, 30),color(255, 203, 161));
                if (b3_space) {
                    song.stop();
                    song = s3_space;
                    b3_space = false;

                }
                b4_lease = checkButtonPress("",410,180,
                    150,20,color(255),color(233, 122, 30),color(255, 203, 161));
                if (b4_lease) {
                    song.stop();
                    song = s4_lease;
                    b4_lease = false;

                }
                b5_wii = checkButtonPress("",410,220,
                    150,20,color(255),color(233, 122, 30),color(255, 203, 161));
                if (b5_wii) {
                    song.stop();
                    song = s5_wii;
                    b5_wii = false;

                }
                fill(0);
                noStroke();
                rect(410,40, 90,20);
                rect(410,80, 90,20);
                rect(410,120, 90,20);
                rect(410,160, 90,20);
                rect(410,200, 90,20);
                
                spacemanPrint(200, 310, smColor, "piano");
                break;
            case 7:
                spacemanPrint(420, 320, smColor, "plant");
                break;
        }
        image(livingR2,0,0,750, 500);
        
        
    //all buttons
    /*btnevent1 = checkButtonPress("?",620,10,
        40,40,color(220,100,100),color(100),color(250));  
    if (btnevent1) { // help
      btnevent1 = false;
      this.sceneManager.showScene( help );
    }*/
    idle = checkButtonPress("",450,370,
        70,30,color(113, 238, 93,0),color(50, 100, 100,0),color(113, 0, 93,0));
    if (idle) {
        state = 1;
        idle = false;

    }
    clock = checkButtonPress("",275,112,
        64,64,color(113, 238, 93,0),color(50, 100, 100,0),color(113, 0, 93,0));
    if (clock) {
        state = 3;
        clock = false;
        
    }
    calendar = checkButtonPress("",275,260,
        70,70,color(113, 238, 93,0),color(50, 100, 100,0),color(113, 0, 93,0));
    if (calendar) {
        state = 4;
        calendar = false;

    }
    
    bookshelf = checkButtonPress("",140,195,
        60,160,color(113, 238, 93,0),color(50, 100, 100,0),color(113, 0, 93,0));
    if (bookshelf) {
        state = 5;
        bookshelf = false;
        
    }
    door = checkButtonPress("",35,170,
        35,185,color(113, 238, 93,0),color(50, 100, 100,0),color(113, 0, 93,0));
    if (door) {
        door = false;

    }
    piano = checkButtonPress("",190,428,
        190,74,color(113, 238, 93,0),color(50, 100, 100,0),color(113, 0, 93,0));
    if (piano) {
        state = 6;
        piano = false;
      
    }
    couch = checkButtonPress("",640,280,
        110,110,color(113, 238, 93,0),color(50, 100, 100,0),color(113, 0, 93,0));
    if (couch) {
        state = 2;
        couch = false;
    }
    plant = checkButtonPress("",530,450,
        115,50,color(113, 238, 93,0),color(50, 100, 100,0),color(113, 0, 93,0));
    if (plant) {
        state = 7;
        plant = false;
    }

        //moves background left
        if(bgX1 > -750){
            bgX1 -= 1;
        }else{
            bgX1 = 0;
        }
        
        if(mouseIsPressed){
            mouseTap = false;
        }else{
            mouseTap = true;
        }
        
    }  //end
    
    this.mousePressed = function() {
    }
   
    


}



////////////////////////////// 3 /////////////////

function help() {

    this.setup = function()  {
        console.log("We are at setup for help");
        // access a different scene using the SceneManager

    }

    this.enter = function()
    {
     console.log("We are at entering for help");
     /*ghosty.visible = true;
     ghosty.position.x = 100;
     ghosty.position.y = 100;*/


    }

    this.draw = function() {
      background("lightblue");
      // this is the draw function for all p5.play commands
     
      fill(200,150,0);
      ellipse(width/2,height/2+150,260,220);
      fill(0,120,200);
      rect(-5,height-170,width+5,170); 
      fill("black");
      textAlign(LEFT);
      textSize(25);
      text( "Hi, My name is Ghosty. \nSome call me the 'Ghost of the Sea'. " , 170,70);
      text( "Click on me, to go back to the main page,\nthen click and roll over me to see what i can do. ", 30, 220);

      

      /*if ( ghosty.mouse.hovering() ) {
        console.log("over");
        ghosty.changeAnimation("stand");
        // ghosty.position.x += random(-4,4);
        // ghosty.position.y += random(-2,2);
      
     }  else {

      ghosty.changeAnimation("normal");


     }
      

     if (ghosty.mouse.pressing()) {
           if ( !snd2.isPlaying() ) {
              snd2.play();
          } else {
              snd2.pause();

          }

       this.sceneManager.showScene( main );

     }  */



        
    }

   

}


function checkButtonPress(str,bx,by,boxW,boxH,upcolor,ovcolor,dncolor) {

  let btnc = "";
  let btnstate =false;

  // Test if the cursor is over the box
  if ( mouseX > bx - boxW &&
       mouseX < bx + boxW &&
       mouseY > by - boxH &&
       mouseY < by + boxH ) {
       overBox = true;

    if (!mouseIsPressed) {
      btnc = ovcolor;
      btnstate = false;
    } else {
      console.log(str + " pressed");
      btnc = dncolor;
      btnstate = true;
    }

  } else {
    btnc = upcolor;
    overBox = false;
  }

  push();
  translate(bx,by);
  fill(btnc);
  rect(0, 0, boxW, boxH,10); // draw the box

  fill(20);
  noStroke();
  textSize(20);
  textAlign(CENTER);
  text (str,boxW/2,28);

    pop();

    return btnstate;

}

function spacemanPrint(smX, smY, Colors, pose){
    spaceman.position.x = smX;
    spaceman.position.y = smY;
    spaceman.changeAnimation(pose);
    spaceman.draw();
    tint(Colors);
    blendMode(MULTIPLY);
    spaceman.draw();
    blendMode(NORMAL);
    tint(255);
}


function playshortsound() {
  if ( !snd2.isPlaying() ) {
    snd2.play();
  } else {
     snd2.stop();
 }


}
