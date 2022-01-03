var ground,lander
var landerImg
var bgImg
var vx=0
var g=0.05
var vy=0

function preload() {
  landerImg=loadImage("normal.png")
  bgImg=loadImage("bg.png")
}

function setup() {
    createCanvas(1200,750)
    frameRate(80)

    lander=createSprite(600,90,30,30)
    lander.addImage("lander",landerImg)
    lander.scale=0.1
    
    rectMode(CENTER)
    textSize(15)
  
}

function draw() {
  background("blue")
  image(bgImg,0,0,1200,750)

  push()
  fill(255)
  text("Vertical Velocity : "+round(vy),1000,50)

  pop()

  vy=vy+g
  lander.position.y=lander.position.y+vy
  
  drawSprites()
}