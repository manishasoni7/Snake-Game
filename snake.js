function Snake(){
    this.x=0;
    this.y=0;
    this.xspeed=scale*1;
    this.yspeed=0;
    this.total = 0;
    this.tail = [];
    this.mytime=20000;

    this.draw = ()=> {
        ctx.fillStyle = "#FFFFFF";
        for (let i=0; i<this.tail.length; i++) {
            ctx.fillRect(this.tail[i].x,
              this.tail[i].y, scale, scale);
          }
       
        ctx.fillRect(this.x, this.y, scale, scale);
        
      }
    
      this.update = ()=> {
        for (let i=0; i<this.tail.length - 1; i++) {
            this.tail[i] = this.tail[i+1];
          }
      
          this.tail[this.total - 1] =
            { x: this.x, y: this.y };

        this.x += this.xspeed;
        this.y += this.yspeed;

        if (this.x > canvas.width) {
            this.x = 0;
          }
      
          if (this.y > canvas.height) {
            this.y = 0;
          }
      
          if (this.x < 0) {
            this.x = canvas.width;
          }
      
          if (this.y < 0) {
            this.y = canvas.height;
          }
    
      }
    
    this.changeDirection= (direction)=>{
        
        const goingUp = this.yspeed === -10;
        const goingDown = this.yspeed === 10;
        const goingRight = this.xspeed === 10;
        const goingLeft = this.xspeed === -10;
        
        if(direction=="Up" && !goingDown ){
            this.xspeed=0;
            this.yspeed=-scale*1;
        }
        if(direction=="Down" && !goingUp ){
            this.xspeed=0;
            this.yspeed=scale*1;
        }
        if(direction=="Left" && !goingRight ){
            this.xspeed=-scale*1;
            this.yspeed=0;
        }
        if(direction=="Right" && !goingLeft ){
            this.xspeed=scale*1;
            this.yspeed=0;
        }
    }

    this.eat = function(food) {
        
        if (this.x === food.xfood &&
          this.y === food.yfood) {
          this.total++;
          if(this.mytime<62000)
            {
                this.mytime+=500;
            }
          return true;
        }    
        return false;
      }
    
      this.checkCollision = function() {
        for (var i=0; i<this.tail.length; i++) {
          if (this.x === this.tail[i].x &&
            this.y === this.tail[i].y) {
            alert("Game Over!!!");
            this.total = 0;
            this.tail = [];
          }
        }
      }

}
