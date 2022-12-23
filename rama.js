class rama{
   press_a_type(x_start, y_start, x_stop, y_stop, nivel){
    if(mouseX >= x_start && mouseX <= x_stop && mouseY >= y_start && mouseY <= y_stop)
      level = nivel;
  }  
  
  draw(xloc, yloc, width, height){
    this.w_back = xloc - 500; 
    this.h_back = yloc + 500;
    push();
    stroke(100);
    fill(229, 204, 255);
    rect(this.w_back, this.h_back, width/2, height, 30);
    textSize(40);
    fill(0, 204, 0);
    text("Back", this.w_back + 50, this.h_back + 60);
    pop();
    //drawTarget(width * 2.5, height * 2.5, 350, 4);
  }
  
  draw_responses(raspunsuri, pozitie){
    this.ct_st = [350, 610, 870, 1130];
    push();
    stroke(100);
    //dreptunghi mai mare
    fill(34, 215, 178);
    rect(300, windowHeight-300, windowWidth*3/4,305,30);
    
    //raspunsuri
    fill(colors[2]);
    
    rect(350, windowHeight-215, 200, 150, 30);
    rect(610, windowHeight-215, 200, 150, 30);
    rect(870, windowHeight-215, 200, 150, 30);
    rect(1130, windowHeight-215, 200, 150, 30);
    
    fill(0);
    textSize(25);
    text(raspunsuri[0] , 350+90, windowHeight-135);
    text(raspunsuri[1] , 610+90, windowHeight-135);
    text(raspunsuri[2] , 870+90, windowHeight-135);
    text(raspunsuri[3] , 1130+90, windowHeight-135);
    pop();
    
    if(mouseIsPressed && !apasat&& mouseX >= this.ct_st[pozitie] && mouseX <= this.ct_st[pozitie]+200 && mouseY >= windowHeight-215 && mouseY <= windowHeight-215+150){
      apasat = 1;
      my_jar.correct += 1;
      if(my_jar.correct === 10){
        if(my_tipuri_complete.comp[level-3].achieved === 0){
          my_tipuri_complete.comp[level-3].achieved = 1;
          my_tipuri_complete.nr_complete ++;
        }
        if(my_tipuri_complete.nr_complete === 3)
           level = 8;
        else
          level = 2;
      }
      ingame = 1;
    }
    else{
      for(let i = 0 ; i < 4 ; i ++){
        if(mouseIsPressed && !apasat&& pozitie != i && mouseX >= this.ct_st[i] && mouseX <= this.ct_st[i]+200 && mouseY >= windowHeight-215 && mouseY <= windowHeight-215+150){
      apasat = 1;
      if(my_jar.correct != 0)
        my_jar.correct -= 1;
      ingame = 1;
      }
      }
    }
    if(mouseIsPressed){
      this.press_a_type(this.w_back, this.h_back, this.w_back + width/2, this.h_back + height, 2);
    }
  }
  
}

function drawTarget(xloc, yloc, size, num) {
  const grayvalues = 255 / num;
  const steps = size / num;
  for (let i = 0; i < num; i++) {
    push();
      i++;
    fill(i * grayvalues,i*grayvalues,i*2*grayvalues);
      i--;
    ellipse(xloc, yloc, size - i * steps, size - i * steps);
    
    pop();
  }
}