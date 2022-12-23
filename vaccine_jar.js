class one_fill{
  //contructor de o linie 
  constructor(x_start, y, x_end){
    this.x_start = x_start;
    this.y = y;
    this.x_end = x_end;
    this.weight_stroke = 10;
  }
  display(){
    push();
    lvl_crt = level - 3;
    stroke(colors[lvl_crt]);
    strokeWeight(this.weight_stroke);
    let xtemps = this.x_start + this.weight_stroke ;
    let xtempf = this.x_end - this.weight_stroke ;
    line(xtemps, this.y, xtempf, this.y);
    pop();
  }
}

class vaccine_jar{
  //initializarea 
  constructor(){
    
    this.correct = 7;
    this.weight_stroke = 10;
    this.strk = 0;
    
    this.fill = [];
    
    let xcrt = windowWidth - 200;
    let xfin = windowWidth - 100;
    let ycrt = 200;
    for(let i = 0 ; i < 10; i++){
      let crt = new one_fill(xcrt, ycrt, xfin);
      ycrt -= 10;
      this.fill[i] = crt;
    }
  }
  reinit(){
    this.correct = 0;
  }
  draw() {
    push();
    stroke(this.strk);
    strokeWeight(this.weight_stroke);
    line(windowWidth - 100, 100, windowWidth - 100, 210);
    line(windowWidth - 200, 100, windowWidth - 200, 210);
    line(windowWidth - 200, 210, windowWidth - 100, 210); 
    for(let i = 0 ; i < this.correct ; i++){
      this.fill[i].display();
    }
    strokeWeight(1);
    textSize(20);
    if(this.correct === 1)
      text(this.correct +" raspuns corect din : " + "10",windowWidth - 270, 235  );
    else
    text(this.correct +" raspunsuri corecte din : " + "10",windowWidth - 270, 235  );
    pop();
  }
  
}