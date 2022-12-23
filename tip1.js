class tip1
{
  constructor()
  {
    this.raspuns = [];
    this.poz = 0;
  }
  ok(x)
  {
    let i;
    for (i = 0; i < this.raspuns.length; ++i)
      if (this.raspuns[i] === x)
        return false;
    return true;
  }
  draw(xloc, yloc, size, num)
  {
    let a, b, val, last, crt, aux, i;
    val = rand(1, 10);
    do
    {
      a = rand(1, 3);
      b = rand(0, 4);
    } while (val === a * val + b);
    push();
    textSize(50);
    text("Care este urmatorul termen al sirului ? ",xloc -200, yloc-150);
    for (i = 1; i < 3; ++i)
    {
      text (val, xloc + i * 100-300, yloc-90);
      val = a * val + b;
    }
    last = val;
    text(val, xloc + 3 * 100-290, yloc-90);
    pop();
    val = a * val + b;
    this.raspuns = [];
    this.raspuns.push(val);
    for (i = 0; i < 3; ++i)
    {
      do
        crt = rand(last + 1, 4 * val - 3 * last);
      while (!this.ok(crt));
      this.raspuns.push(crt);
    }
    this.poz = rand(0, 3);
    aux = this.raspuns[0];
    this.raspuns[0] = this.raspuns[this.poz];
    this.raspuns[this.poz] = aux;
  }
}