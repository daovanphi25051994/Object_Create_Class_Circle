function Cirlce(radius, color) {
    this.radius = radius;
    this.color = color;
    this.getRadius = function () {
        return this.radius;
    }
    this.setRadius = function (radius) {
        this.radius = radius;
    }
    this.getArea = function () {
        return Math.PI * Math.pow(this.radius, 2);
    }
    this.showAreaOfCircle = function () {
        return "radius : " + this.radius + " ; area : " + this.getArea();
    }
}

let circle1 = new Cirlce(3.3);
alert(circle1.showAreaOfCircle());

let circle2 = new Cirlce();
circle2.setRadius(4);
alert(circle2.showAreaOfCircle());
