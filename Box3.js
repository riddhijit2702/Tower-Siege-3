class Box3{
    constructor(x,y,width,height){
        var options={

            restitution : 0.5,
            friction: 0.2,
            
         
          }
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.width =width;
        this.height =height;
        World.add(world,this.body);
    }
    display(){
        if(this.body.speed<5){
            var pos = this.body.position;
            var angle = this.body.angle;
                push();
                translate(pos.x, pos.y);
                rotate(angle);
                rectMode(CENTER);
                stroke("#1CA773");
                strokeWeight(4);
                fill("#FF9055");
                rect(0,0,this.width,this.height);
                pop();
            }
           else{
            World.remove(world,this.body);
            push();
            this.visibility = this.visibility - 5;
          tint(255, this.visibility);
        // image(this.image,this.body.position.x,this.body.position.y,50,50);
            pop();
           }
         
        }
        score(){
            if(this.Visibility<0&&this.Visibility>1005){
         score++
     }}
    }
  












