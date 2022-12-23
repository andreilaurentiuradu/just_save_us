class un_tip_col{
  constructor(x, y,crt){
    this.color = colors[crt];
    this.x = x;
    this.y = y;
    this.achieved = 0;
  }
  display(){
    if(this.achieved === 1){
      push();
      stroke(0);
      fill(this.color);
      square(this.x, this.y, 25);
      pop();
    }
    else{
      push();
      fill(255);
      stroke(0);
      square(this.x, this.y, 25);
      pop();
    }
  }
}

class tipuri_complete{
  constructor(){
    this.comp = [];
    let xcrt = windowWidth - 200;
    let ycrt = 240;
    for(let i = 0 ; i < 3 ; i++)
    {
      let nou = new un_tip_col(xcrt, ycrt, i);
      this.comp[i] = nou;
      xcrt += 25;
    }
    this.nr_complete = 0;
  }
  draw(){
    push();
    textSize(20);
    fill("#ad2f9e");
    text("Tipuri colectate ",windowWidth - 340, 260 );
    pop();
    for(let i = 0; i < 3; i ++){
      this.comp[i].display();
    }
  }
  
}