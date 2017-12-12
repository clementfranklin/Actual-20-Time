var scene1 = function()
{
  background(174, 226, 252);
  
};

var Car = function() {
    this.position = new PVector(width/2, height/2);
    this.velocity = new PVector(0, 0);
    this.acceleration = new PVector(0, 0);
};

Car.prototype.update = function() {
    this.velocity.add(this.acceleration);
        if (this.velocity.x<0)
    {
        this.velocity.set(0,0);
    }
    this.velocity.limit(10);
    this.position.add(this.velocity);
    
};

Car.prototype.display = function() {
    stroke(0);
    strokeWeight(2);
    fill(255, 0, 0);
    rect(this.position.x-52, this.position.y-59, 60, 60);
    rect(this.position.x-74, this.position.y-30, 100, 31);
    fill(92, 92, 92);
    ellipse(this.position.x, this.position.y, 30, 26);
    ellipse(this.position.x-50, this.position.y, 30, 30);
};

Car.prototype.checkEdges = function() {
    if (this.position.x > width) {
        this.position.x = 0;
    } 
    else if (this.position.x < 0) {
        this.position.x = width;
    }
};

//Motorcycle

var Bike = function() {
    this.position = new PVector(width/2, height/2);
    this.velocity = new PVector(0, 0);
    this.acceleration = new PVector(0, 0);
};

Bike.prototype.update = function() {
    this.velocity.add(this.acceleration);
        if (this.velocity.x<0)
    {
        this.velocity.set(0,0);
    }
    this.velocity.limit(10);
    this.position.add(this.velocity);
    

    
};

Bike.prototype.display = function() {
    stroke(0);
    strokeWeight(2);
    fill(0, 98, 255);
    rect(this.position.x-52, this.position.y-59, 60, 60);
    rect(this.position.x-74, this.position.y-30, 100, 31);
    fill(92, 92, 92);
    ellipse(this.position.x, this.position.y, 30, 26);
    ellipse(this.position.x-50, this.position.y, 30, 30);
};

Bike.prototype.checkEdges = function() {
    if (this.position.x > width) {
        this.position.x = 0;
    } 
    else if (this.position.x < 0) {
        this.position.x = width;
    }
    
    
};

//Draw

var car = new Car();
var bike = new Bike();

draw = function() {

    background(237, 237, 237);
    car.update();
    car.checkEdges();
    car.display(); 
    bike.update();
    bike.checkEdges();
    bike.display();
    
        if (keyIsPressed && keyCode===39)
    {
       car.acceleration.set(0.09, 0);
       bike.acceleration.set(0.05, 0);
    }
    else if (keyIsPressed && keyCode===37)
    {
        car.acceleration.set(-0.09*2, 0);
        bike.acceleration.set(-0.05*2, 0);
    }
    
    else  {
        car.acceleration.set(0, 0);
        bike.acceleration.set(0, 0);
    }
    
    if (keyIsPressed && keyCode===108)
    {
        
    }
};
