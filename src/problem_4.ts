{
  // Problem 04: Define a union type Circle and Rectangle, where each type has a unique shape property. Create a function calculateShapeArea that uses type guards to calculate the area based on the shape type.

  type DataType = string | number;

  class Shape {
    getArea(): number {
      return 0;
    }
  }
  class Circle extends Shape {
    radius: number;
    constructor(radius: number) {
      super();
      this.radius = radius;
    }
    getArea(): number {
      return Math.PI * this.radius * this.radius;
    }
  }
  class Rectangle extends Shape {
    height: number;
    width: number;
    constructor(height: number, width: number) {
      super();
      this.height = height;
      this.width = width;
    }
    getArea(): number {
      return this.height * this.width;
    }
  }

  const getArea = (param: Shape) => {
    // using instance of type guard
    if (param instanceof Circle) {
        const area = param.getArea().toFixed(2); 
        console.log("Circle area calculation:", area);
        return `Circle Area: ${area}`;
    }
    if (param instanceof Rectangle) {
        const area = param.getArea().toFixed(2); 
        console.log("Rectangle area calculation:", area);
        return `Rectangle Area: ${area}`;
    }
    return param.getArea().toFixed(2);
  };
  const circularShape = new Circle(10);
  const rectangularShape = new Rectangle(10, 15);
  console.log(
    "\n---------------- Solution of the Problem 04 ----------------\n"
  );
  getArea(circularShape)
  getArea(rectangularShape)
}
