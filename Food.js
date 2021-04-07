function Food() {
    this.xfood;
    this.yfood;
    this.timer=(time)=>{
        time=setInterval('',3000);
        console.log(time);
    }
  
    this.pickLocation = function() {
      this.xfood = (Math.floor(Math.random() *columns - 1) + 1) * scale;
      this.yfood = (Math.floor(Math.random() *rows - 1) + 1) * scale;
    }
  
    this.draw = function() {
      ctx.fillStyle = "#4cafab";
      ctx.fillRect(this.xfood, this.yfood, scale, scale)
    }
  }