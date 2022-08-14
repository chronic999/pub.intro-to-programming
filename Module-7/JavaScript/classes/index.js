//  Defining a class

//  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes#prototype_methods

//  Class declarations

// One way to define a class is using a class declaration. To declare a class, you use the class keyword with the name of the class ("Rectangle" here).

// class Rectangle {
//   constructor(height, width) {
//     this.height = height;
//     this.width = width;
//   }
// }

//  Prototype method example

class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  // Getter
  get area() {
    return this.calcArea();
  }
  // Method
  calcArea() {
    return this.height * this.width;
  }
}

const square = new Rectangle(10, 10);

console.log(square.area); // 100
