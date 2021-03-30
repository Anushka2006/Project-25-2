class paper{
    constructor(x,y){
        var options ={
            isStatic: false,
            restitution: 0.3,
            friction:0,
            density:1.2
        }
        this.body= Bodies.rectangle(x,y,20,40,options);
        this.image=loadImage("paper.png");
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        imageMode(CENTER);
        image(pos.x,pos.y, 20,40);
    }
}