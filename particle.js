class Particle {
    constructor(x,y,radius){
        var options={
            isStatic:false,
            restitution:1,
            density:1.0,
            friction :1.0
           }
          //this.image=loadImage("dust.png");
       // this.width=width;
       
        this.radius=10; 
        this.body=Bodies.circle(x,y,this.radius,options);
        World.add(world,this.body);
        this.color=color(random(0,255),random(0,255),random(0,255));
    }
    
    display(){
        var pos=this.body.position
        var angle=this.body.angle
    
        push();
        translate(pos.x,pos.y)
        rotate(angle)

        fill(this.color)
        ellipseMode(RADIUS)
        ellipse(0,0,this.radius,this.radius)
        pop();
    
    }
    
    }
