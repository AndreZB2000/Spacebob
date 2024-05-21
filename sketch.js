
// This contains the use of both Scenemanager and P5.play
// Documentation and additional examples of these libraries can be found at:
//https://github.com/mveteanu/p5.SceneManager
//http://molleindustria.github.io/p5.play/


let image1_up, image2_over;
let snd1,snd2;
let s1_parlor, s2_mii, s3_space, s4_lease,s5_wii;
// var duration;
// var  slideWidth = 500;

// global manager object
var mgr;

// define your p5.play sprites that you want to use in more that 1 scene.
var spaceman;
var livingR, livingR2, space;

function preload() {
    // sound should be loaded so its available for all places.
   s1_parlor = loadSound("assets/Pizza Parlor.mp3");
   s2_mii = loadSound("assets/Editing a Mii (Mii Maker) - Nintendo Wii U.mp3");
   s3_space = loadSound("assets/Space Fantasy - Super Mario Galaxy.mp3");
   s4_lease   = loadSound("assets/LEASE by Takeshi Abo but slightly bitcrushed for nostalgia.mp3");
   s5_wii = loadSound("assets/Lobby (TV) - Wii U Chat.mp3");
    
   livingR = loadImage("assets/Living-Room.png")
    livingR2 = loadImage("assets/Living-Room2.png")
    space = loadImage("assets/space.png")
}


function setup() {
    createCanvas(750, 500);
    //console.log(hell);
    mgr = new SceneManager();

    spaceman = createSprite(0, 0);
    spaceman.addAnimation("idle", "assets/idle_01.png", "assets/idle_02.png");
    spaceman.addAnimation("calendar", "assets/calendar_01.png","assets/calendar_02.png");
    spaceman.addAnimation("clock", "assets/clock_01.png", "assets/clock_02.png");
    spaceman.addAnimation("couch","assets/couch_01.png","assets/couch_02.png");
    spaceman.addAnimation("plant","assets/plant_01.png","assets/plant_02.png");
    spaceman.addAnimation("piano", "assets/piano_01.png","assets/piano_02.png");
    spaceman.addAnimation("clothes","assets/clothes_01.png","assets/clothes_02.png");
    
     // make the sprite invisible until you need it.
    spaceman.visible = false;

    // Preload scenes. Preloading is normally optional
    // ... but needed if showNextScene() is used.
    mgr.addScene (splash);
    mgr.addScene (main);
    mgr.addScene (help);
    mgr.showNextScene();

}

function draw()
{
    mgr.showScene( main );
    // passthe current draw function into the SceneManager
    mgr.draw();
    
}

function mousePressed()
{
   // pass the mousePressed message into the SceneManager
  mgr.mousePressed();
}

function keyPressed()
{
    // You can optionaly handle the key press at global level...
    switch(key)
    {
        case '1':
            mgr.showScene( splash );
            break;
        case '2':
            mgr.showScene( main );
            break;
        case '3':
            mgr.showScene( help );
            break;
        case 'h':
            mgr.showScene( help );
            break;
    }
   
    // ... then dispatch via the SceneManager.
    mgr.keyPressed();
}
