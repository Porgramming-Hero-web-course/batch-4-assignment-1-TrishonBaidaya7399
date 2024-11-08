{
  // Problem 01: Write a TypeScript function sumArray that takes an array of numbers and returns the sum of all elements in the array.
  interface NumArr {
    numbers: number[];
  }

  const number: NumArr = {
    numbers: [1, 2, 3, 4, 5],
  };

  const sumArray = (numArr: NumArr): number=> {
    let sum = 0;
    for (let i = 0; i < numArr?.numbers?.length; i++) {
      sum += numArr?.numbers[i];
    }
    return sum;
  };
  console.log("\n---------------- Solution of the Problem 01 ----------------\n");
  console.log(
    `The sum of the array [${number?.numbers}] is: ${sumArray(number)}`
  );

  // ------------------------------------------------------------------------------------------------------->
}
