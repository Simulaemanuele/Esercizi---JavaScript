class Square {
  constructor(side) {
    this.side = side;
  }
}

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}

class Circle {
  constructor(radius) {
    this.radius = radius;
  }
}

class AreaCalculator {
  static calculate(figure){
    /*if(figure.side === 4){
      return figure.side * figure.side;
    } else if(figure.width && figure.height) {
      return 2 * (figure.width + figure.height);
    } else {
      return Math.pow(figure.radius,2) * 3.14;
    }*/

    return figure.side ? Math.pow(figure.side, 2) : figure.width && figure.height ? 2*(figure.width+figure.height) : Math.pow(figure.radius,2)*3.14;
  }
}

const square = new Square(4);
const rectangle = new Rectangle(4, 2);
const circle = new Circle(5);

console.log(AreaCalculator.calculate(square));
console.log(AreaCalculator.calculate(rectangle));
console.log(AreaCalculator.calculate(circle));