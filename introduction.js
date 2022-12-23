class introduction {
  constructor(x, y, l) {
    this.y = y;
    this.x = x;
    this.l = l;
  }

  display_remedy(boom_remedy){
    if(boom_remedy === 0){
      push();
      let rosu1 = floor(random(1,255));
      let verde1 = floor(random(1,255));
      let albastru1 = floor(random(1,255));
      fill(rosu1, verde1, albastru1);
      rect(this.x, this.y, this.l/2, this.l/2);
      pop();
      
      push();
      let rosu2 = floor(random(1,255));
      let verde2 = floor(random(1,255));
      let albastru2 = floor(random(1,255));
      fill(rosu2, verde2, albastru2);
      rect(this.x + this.l/2, this.y, this.l/2, this.l/2);
      pop();
      
      push();
      let rosu3 = floor(random(1,255));
      let verde3 = floor(random(1,255));
      let albastru3 = floor(random(1,255));
      fill(rosu3, verde3, albastru3);
      rect(this.x, this.y + this.l/2, this.l/2, this.l/2);
      pop();
      
      push();
      let rosu4 = floor(random(1,255));
      let verde4 = floor(random(1,255));
      let albastru4 = floor(random(1,255));
      fill(rosu4, verde4, albastru4);
      rect(this.x + this.l/2, this.y + this.l/2, this.l/2, this.l/2);
      pop();
    }
    else{
      push();
      let rosu = 255;
      let verde = 255;
      let albastru = 255;
      fill(rosu, verde, albastru);
      rect(this.x, this.y, this.l, this.l);
      pop();
      
      fill(0, 255, 255);
      textSize(60);
      text("2020 a fost un an greu", 60, 200);
      text("pentru noi toti...", 60, 280);
      textSize(35);
      text("Aceasta pandemie a afectat ", 880, 50);
      text("globul in nenumarate feluri, ", 880, 100);
      text("dar impreuna avem puterea de", 880, 150);
      text("a ne ridica si de a dovedi ce stim", 880, 200);
      text("in timpul acestor perioade grele.", 880, 250);
      text("Indeplineste sarcinile si ajuta-ne ", 880, 300);
      text("sa cream un vaccin recuperand", 880, 350)
      text("cele trei gene necesare. ", 880, 400);
      
      push();
      fill(0, 255, 255);
      textSize(60);
      text("FII EROUL NOSTRU!", 800, 650);
      pop();
      
      let patrat_1x = this.x, patrat_1y = this.y;
      let patrat_2x = this.x + this.l/2, patrat_2y = this.y;
      let patrat_3x = this.x, patrat_3y = this.y + this.l/2;
      let patrat_4x = this.x + this.l/2, patrat_4y = this.y + this.l/2;
      
      while(patrat_1x >= 10) {
        push();
        fill(0, 0, 255);
       //rotate(frameCount / 200);
        square(patrat_1x, patrat_1y, this.l/2);
        pop();
        patrat_1x-=10;
      }
      
      while(patrat_2y >= 10) {
        push();
        fill(0, 255, 0);
       //rotate(frameCount / 200);
        square(patrat_2x, patrat_2y, this.l/2);
        pop();
        patrat_2y-=10;
      }
      
      while(patrat_3y <= 800) {
        push();
        fill(255, 0, 0);
       //rotate(frameCount / 200);
        square(patrat_3x, patrat_3y, this.l/2);
        pop();
        patrat_3y+=10;
      }
      
      while(patrat_4x <= 1500) {
        push();
        fill(255, 255, 0);
       //rotate(frameCount / 200);
        square(patrat_4x, patrat_4y, this.l/2);
        pop();
        patrat_4x+=10;
      }
      
      push();
      fill(229, 204, 255);
      rect(100, 500, 300, 100, 30);
      fill(0, 204, 0);
      textSize(60);
      text("Continua", 100 + 35, 500 + 65);
      pop();
      if(mouseIsPressed && mouseX >= 100 && mouseX <= 400 && mouseY >= 500 && mouseY <= 600)  {
        level = 2;
        nr_boom = 0;
      }
    }
    
  }
}