let level = 0;
let level_anterior = 0;
let my_start;
let my_menu;
let my_introduction;
let my_tip1;
let my_tip2;
let my_tip3;
let my_tip4;
let my_jar;
let my_rama;
let my_final;
let my_tipuri_complete;
let my_tip_castigat;

let apasat;
let ms = 1000;
let lvl_crt;

let ingame = 0;
let x_remedy, y_remedy;
let nr_boom;
let is_right;
//width = 1536 windowWidth
//height = 754 windowHeight 

function rand(x, y)
{
  return floor(random(x, y + 1));
}

function mouseReleased(){
  apasat = 0;
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  noStroke();
  //noLoop();
  my_start= new start();
  my_menu = new menu();
  my_tip1 = new tip1();
  my_tip2 = new tip2();
  my_tip3 = new tip3();
  my_tip4 = new tip4();
  my_jar = new vaccine_jar();
  my_tipuri_complete = new tipuri_complete();
  my_rama = new rama();
  my_final = new final();
  my_tip_castigat = new tip_castigat();
  
  x_remedy = 650;
  y_remedy = 320;
  nr_boom = 0;
  
  frameRate(20);
}

function draw() {
  switch (level) {
    case 0:
      background(51);
      my_start.draw(windowWidth * 0.35, windowHeight * 0.2, 400, 90);
      break;
    case 1:
      background(51);
      my_introduction = new introduction(x_remedy, y_remedy, 200);
      ++nr_boom;
      
      if(nr_boom < 10){ 
        my_introduction.display_remedy(0);
        if(y_remedy <= 320)
          y_remedy += 10;
        else
          y_remedy -= 10;
      }
      else
        my_introduction.display_remedy(1);
      break;
    case 2:
      background(51);
      my_menu.draw(windowWidth * 0.35, windowHeight * 0.2, 400, 90);
      my_tipuri_complete.draw();
      break;
    case 3:
      if(ingame === 1){
        background(206,177,240);
        my_tip1.draw(windowWidth * 0.25, windowHeight * 0.4, 200, 4);
        
        my_rama.draw(windowWidth * 0.35, windowHeight * 0.2, 400, 90);
        ingame = 0;
      }
      my_jar.draw();
      my_rama.draw_responses(my_tip1.raspuns, my_tip1.poz);
      my_tipuri_complete.draw();
      break;
    case 4:
      if(ingame === 1){
      background("#e0e407");
      my_tip2.draw(windowWidth * 0.25, windowHeight * 0.4, 200, 4); 
      
      my_rama.draw(windowWidth * 0.35, windowHeight * 0.2, 400, 90);
      ingame = 0;
      }
      my_jar.draw();
      my_rama.draw_responses(my_tip2.raspuns, my_tip2.poz);
      my_tipuri_complete.draw();
      break;
      
    case 5:
      if(ingame === 1){
      background(51,100,80);
      my_tip3.draw(windowWidth * 0.25, windowHeight * 0.4, 200, 4); 
      my_rama.draw(windowWidth * 0.35, windowHeight * 0.2, 400, 90);
      ingame = 0;
      }
      my_jar.draw();
      my_rama.draw_responses(my_tip3.raspuns, my_tip3.poz);
      my_tipuri_complete.draw();
      break;
    case 6:
      if(ingame === 1){
      background(51);
      my_tip4.draw(windowWidth * 0.25, windowHeight * 0.4, 200, 4);
      my_jar.draw();
        ingame = 0;
      }
      my_jar.draw();
      my_rama.draw(windowWidth * 0.35, windowHeight * 0.2, 400, 90);
      my_tipuri_complete.draw();
      //my_rama.draw_responses(my_tip4.raspuns, my_tip1.poz);
      break;
    case 7:
        background(51);
        my_tip_castigat.draw(windowWidth * 0.25, windowHeight * 0.4, 200, 4);
      break;
    case 8:
        background(51);
        my_final.draw(windowWidth * 0.25, windowHeight * 0.4, 200, 4);
      break;
    default:
      break;
      //  
  }
  
  //level++;
  //if(level > 5 )level = 0;
}