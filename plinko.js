class Plinko {
    constructor(x,y,radius){
        var options={
            isStatic:true,
            restitution:1,
            density:1.0,
            friction :1.0
           }
          //this.image=loadImage("dust.png");
       // this.width=width;
       
        this.radius=10;
        
        this.body=Bodies.circle(x,y,this.radius,options);
        World.add(world,this.body);
    }
    
    display(){
        var pos=this.body.position
        var angle=this.body.angle
    
        push();
        translate(pos.x,pos.y)
        rotate(angle)
       // imageMode(CENTER)
        fill("white")
       // strokeWeight(5);
       ellipseMode(RADIUS)
        ellipse(0,0,this.radius,this.radius)
        pop();

        // for (var j=40; j<= this.width; j=j+50)
        // {
        //  plinkos.push(new Plinko(j,75,50));
        //  } 
        // for (var j = 15; j <=width-10; j=j+50) 
        //  {
        //   plinkos.push(new Plinko(j,175,10));
        // }
    
    }
    
    }