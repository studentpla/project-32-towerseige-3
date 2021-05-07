class Box  {
    constructor(x, y, width, height){
      var options={
        'friction':0.1,
        'restitution':1,
        'density': 0.5

      }
      
  this.body = Bodies.rectangle(x,y,width,height,options)
      this.color = color(random(0,255),random(0,255),random(0,255));
      this.Visiblity = 255;
      World.add(world,this.body);
this.width = width;
this.height = height;      

    }
    display(){
    
      console.log(this.body.speed);
      if(this.body.speed<3){
       rectMode(CENTER);
       fill(this.color);
       rect(this.body.position.x,this.body.position.y,this.width,this.height)
      }else{
        World.remove(world,this.body);
        push();
        this.Visiblity = this.Visiblity - 5;
        tint(255,this.Visiblity);
       
        pop();
      }
    }
    score(){
      if(this.Visiblity<0 && this.Visiblity>-105){
        score =score+5
      }
    }
  };
