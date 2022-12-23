class tip3
{
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
  draw()
  {
    let str = cuvinte[rand(0, cuvinte.length - 1)];
    let ans = 0, crt, aux, i;
    for (i = 0; i < str.length; ++i)
      if(str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u')
      ++ans;
    this.raspuns = [];
    this.raspuns.push(ans);
    for (i = 0; i < 3; ++i)
    {
      do
        crt = rand(ans - 3, ans + 3);
      while (!this.ok(crt));
      this.raspuns.push(crt);
    }
    //console.log(ans, this.raspuns);
    this.poz = rand(0, 3);
    aux = this.raspuns[0];
    this.raspuns[0] = this.raspuns[this.poz];
    this.raspuns[this.poz] = aux;
    textSize(50);
    text('Câte vocale are cuvântul : ' + str, 50, 150);
  }
}