class Dustbin {
    constructor(x,y){

        var options = {
            isStatic:true
        }

        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
    
        this.image = loadImage("dustbingreen.png");

        World.add(world, this.body);
    }

    display(){
        var pos =this.body.position;
        imageMode(CENTER);
        image(this.image,700,590,100,100);
    }
}