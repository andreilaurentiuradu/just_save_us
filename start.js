class start{
  constructor(){
    this.x1 = 100;
    this.x2 = windowWidth-150;
    this.y1 = 110;
    this.y2 = windowHeight-110;
    this.dist1 = 5;
    this.dist2 = -5;
  }
  draw(xloc, yloc, width, height) {
  /*const grayvalues = 255 / num;
  const steps = size / num;
  for (let i = 0; i < num; i++) {
      fill(i * grayvalues);
      ellipse(xloc, yloc, size - i * steps, size - i * steps);
    }*/
    //pentru numele jocului
    push();
    fill(229, 204, 255);
    rect(xloc, yloc, width, height, 30);
    stroke(100);
    textSize(40);
    fill(0, 204, 0);
    text("JUST SAVE US", xloc + 55, yloc + 55);
    pop();
    
    //pentru creatori
    let sorin_x = xloc - 100, sorin_y = yloc + 200;
    let marius_x = xloc - 100, marius_y = yloc + 300;
    let laur_x = xloc + 250, laur_y = yloc + 200;
    let mihai_x = xloc + 250, mihai_y = yloc + 300;
    push();
    stroke(100);
    textSize(40);
    fill(0, 204, 0);
    text("Enachioiu Sorin", sorin_x, sorin_y);
    text("Voina Marius", marius_x, marius_y);
    text("Radu Andrei-Laurentiu", laur_x, laur_y);
    text("Grigore Mihai", mihai_x, mihai_y);
    pop();
    //pentru butonul de play
    
    let play_x = xloc - 75+30, play_y = yloc+400;
    push();
    fill(229, 204, 255);
    rect(play_x, play_y, width*1.3, height*1.5, 30);
    stroke(100);
    textSize(100);
    fill(0, 204, 0);
    text("PLAY", xloc + 90, yloc + 500);
    pop();
    
    push();
    fill(51,100,80);
    square(this.x1,this.y1, 60);
    square(this.x2,this.y2,60);
    if(this.y1 < 100 || this.y1 > windowHeight-100)
      this.dist1 *= (-1);
    if(this.y2 < 100 || this.y2 > windowHeight-100)
      this.dist2 *= (-1);
    this.y1 +=this.dist1;
    this.y2 +=this.dist2;
    pop();
    if(mouseIsPressed && mouseX >= xloc-100 && mouseX <= play_x + width*1.3 && mouseY >= play_y && mouseY <= play_y + height*1.5)
      level = 1;
  }
  
}