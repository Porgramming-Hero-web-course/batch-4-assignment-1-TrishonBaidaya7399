{
  // Problem 02: Create a TypeScript function removeDuplicates that accepts an array of numbers and returns a new array with duplicates removed. Preserve the original order of elements.
  interface NumArr {
    numbers: number[];
  }

  const duplicateNumbers: NumArr = {
    numbers: [1, 2, 2, 3, 4, 4, 5],
  };

  const removeDuplicates = (numArr: NumArr): number[] | undefined => {
    let storage: number[] = [];
    for (let i = 0; i < numArr?.numbers.length; i++) {
      if (!storage.includes(numArr?.numbers[i])) {
        storage.push(numArr?.numbers[i]);
      }
    }
    return storage;
  };

  console.log(
    "\n---------------- Solution of the Problem 02 ----------------\n"
  );
  console.log(
    `The remaining numbers after removing the duplicates are: [${removeDuplicates(
      duplicateNumbers
    )}]`
  );
}
