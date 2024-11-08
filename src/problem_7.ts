{
  // Problem 07: Create a TypeScript class Car with properties make, model, and year. Include a method getCarAge that returns the car's age based on the current year.
  class Car {
    make: string;
    model: string;
    year: number;

    constructor(make: string, model: string, year: number) {
      this.make = make;
      this.model = model;
      this.year = year;
    }

    getCarAge() {
      return `${new Date().getFullYear() - this.year}`;
    }
  }
  const BMW = new Car("Germany", "BMW Series 7", 1977);
  console.log(
    "\n---------------- Solution of the Problem 07 ----------------\n"
  );
  console.log(
    `BMW Car information- \n\nMake in: ${BMW.make}\nModel: ${
      BMW.model
    }\nYear: ${BMW.year}\nCurrent age: ${BMW.getCarAge()}`
  );
  //   -------------------------------------------------------------------------->
}
