class tip2{
  
  constructor()
  {
    this.raspuns = [];
    this.poz = 0;
  }
  
  ok(x)
  {
    let i;
    if (x < 1)
      return false;
    for (i = 0; i < this.raspuns.length; ++i)
      if (this.raspuns[i] === x)
        return false;
    return true;
  }
  
  draw(xloc, yloc, size, num) {
  
    // 0 pentru suma
    // 1 pentru diferenta 
    // 2 pentru inmultire
    // 3 pentru impartire
    
    let operatie = rand(0, 3);
    
    console.log(operatie);
    
    let nr1, nr2, correct_answer;
    let crt, aux;
    
    this.raspuns = [];
    
    if(operatie == 0)
      {
        nr1 = rand(5, 500);
        nr2 = rand(5, 500);
        push();
        textSize(60);
        text(nr1 + " + " + nr2 + " = ?", xloc-200, yloc-150);
        pop();
        correct_answer = nr1 + nr2;
        
        this.raspuns.push(correct_answer);
        
        for (let i = 0; i < 3; ++i)
        {
          do
            crt = rand(correct_answer - 100, correct_answer + 100);
          while (!this.ok(crt));
          this.raspuns.push(crt);
        }
        
        //console.log('adunare');
        //console.log(nr1 + ' + ' + nr2 + ' = ?');
        
      }
    else if(operatie == 1)
      {
          nr1 = rand(5, 1000);
          nr2 = rand(1, nr1 - 1);
        
          correct_answer = nr1 - nr2;
          push();
          textSize(60);
          text(nr1 + " - " + nr2 + " = ?", xloc-200, yloc-150);
          pop();
          this.raspuns.push(correct_answer);
        
          for (let i = 0; i < 3; ++i)
          {
            do
              crt = rand(correct_answer - 100, correct_answer + 100);
            while (!this.ok(crt));
            this.raspuns.push(crt);
          }
        
        //console.log('scadere');
        //console.log(nr1 + ' - ' + nr2 + ' = ?');
        
      }
    else if(operatie == 2)
      {
          nr1 = rand(1, 20); 
          nr2 = rand(1, 20);
        
          correct_answer = nr1 * nr2;
          push();
          textSize(60);
          text(nr1 + " * " + nr2 + " = ?", xloc-200, yloc-150);
          pop();
        
          this.raspuns.push(correct_answer);
        
          for (let i = 0; i < 3; ++i)
          {
            do
              crt = rand(correct_answer - 50, correct_answer + 100);
            while (!this.ok(crt));
            this.raspuns.push(crt);
          }
          
        //console.log('inmultire');
        //console.log(nr1 + ' * ' + nr2 + ' = ?');
        
      }
    else if(operatie == 3)
      {
          nr2 = rand(2, 20);
          nr1 = nr2 * rand(2, 20);
        
          correct_answer = nr1 / nr2;
          push();
          textSize(60);
          text(nr1 + " / " + nr2 + " = ?", xloc-200, yloc-150);
          pop();
          this.raspuns.push(correct_answer);
        
          for (let i = 0; i < 3; ++i)
          {
            do
              crt = rand(correct_answer - 5, correct_answer + 5);
            while (!this.ok(crt));
            this.raspuns.push(crt);
          }
          
        
          //console.log('impartire');
          //console.log(nr1 + ' / ' + nr2 + ' = ?');
      }
    
    this.poz = rand(0, 3);
    aux = this.raspuns[0];
    this.raspuns[0] = this.raspuns[this.poz];
    this.raspuns[this.poz] = aux;
    
    console.log('Variante')
    for(let i = 0; i < this.raspuns.length; ++i)
      console.log(this.raspuns[i]);
  }
}
