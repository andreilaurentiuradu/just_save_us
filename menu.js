class menu{
  
  press_a_type(x_start, y_start, x_stop, y_stop, nivel){
    if(mouseX >= x_start && mouseX <= x_stop && mouseY >= y_start && mouseY <= y_stop){
      my_jar.reinit();
      level = nivel;
      ingame = 1;
    }
      
  }
  draw(xloc, yloc, width, height) {
    push();
    fill(229, 204, 255);
    rect(xloc, yloc, width, height, 30);
    stroke(100);
    textSize(70);
    fill(0, 204, 0);
    text("MENIU", xloc + 90, yloc + 70);
    pop();
    
    //pentru tipuri
    let w_type1 = xloc-100, h_type1 = yloc+150;
    let w_type2 = xloc-100, h_type2 = yloc+300;
    let w_type3 = xloc+300, h_type3 = yloc+150;
    let w_type4 = xloc+300, h_type4 = yloc+300;
    let w_back = xloc - 300, h_back = yloc+500;
    
    
    push();
    stroke(100);
    fill(colors[0]);
    rect(w_type1, h_type1, width/2, height, 30);
    textSize(40);
    fill(255);
    text(" Tip 1", w_type1 + 40, h_type1 + 60);
    
    stroke(100);
    fill(colors[1]);
    rect(w_type2, h_type2, width/2, height, 30);
    textSize(40);
    fill(255);
    text(" Tip 2", w_type2 + 40, h_type2 + 60);
    
    stroke(100);
    fill(colors[2]);
    rect(w_type3, h_type3, width/2, height, 30);
    textSize(40);
    fill(255);
    text(" Tip 3", w_type3 + 40, h_type3 + 60);
    
    stroke(100);
    fill(colors[3]);
    rect(w_type4, h_type4, width/2, height, 30);
    textSize(40);
    fill(255);
    text("Va urma", w_type4 + 30, h_type4 + 60);

    
    stroke(100);
    fill(229, 204, 255);
    rect(w_back, h_back, width/2, height, 30);
    textSize(40);
    fill(0, 204, 0);
    text("Back", w_back + 50, h_back + 60);
    
    pop();
    //pentru butonul de play
    
    if(mouseIsPressed){
      this.press_a_type(w_type1, h_type1, w_type1 + width/2, h_type1 + height, 3);
      this.press_a_type(w_type2, h_type2, w_type2 + width/2, h_type2 + height, 4);
      this.press_a_type(w_type3, h_type3, w_type3 + width/2, h_type3 + height, 5);
      //this.press_a_type(w_type4, h_type4, w_type4 + width/2, h_type4 + height, 6);
      this.press_a_type(w_back, h_back, w_back + width/2, h_back + height, 0);
    }
    
  }
}