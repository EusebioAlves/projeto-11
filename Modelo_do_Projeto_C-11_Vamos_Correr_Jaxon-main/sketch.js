var corredor, rua;
var corredorImg, ruaImg;
var floor1, floor2;

function preload(){
  //imagens pré-carregadas

  corredorImg =  loadAnimation("Runner-1.png", "Runner-2.png", "Runner-1.png", "Runner-2.png");
  ruaImg = loadImage("path.png");
}

function setup(){
  createCanvas(400,650);

  //crie sprite aqui

  rua = createSprite(200,0, 20, 20);
  rua.addImage(ruaImg);
  rua.velocityY = 5;
  rua.scale = 1.3;


  corredor = createSprite(200,600,20,20);
  corredor.addAnimation("corredorMovendo", corredorImg);
  corredor.scale = 0.06;

  floor1 = createSprite(5,200,10,400);
  floor1.visible = false;
  floor2 = createSprite(395,200,10,400);
  floor2.visible = false;

}

function draw() {
  background("black");

  if(keyDown("RIGHT_ARROW") || keyDown("D")){
    corredor.x = corredor.x + 4;
  }
  //Se a tecla "A" ou a seta esqeurda forem pressionadas, mover o runner para a esquerda
  if(keyDown("LEFT_ARROW") || keyDown("A")){
    corredor.x = corredor.x - 4;
  }
corredor.collide(floor1);
corredor.collide(floor2);

  if (rua.y >= 400){
    rua.y = rua.height/4;

  
  }
drawSprites();
}