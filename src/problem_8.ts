{
  // Problem 08: Create a function validateKeys(obj: T, keys: (keyof T)[]) that takes an object obj and an array of keys keys. The function should return true if all of the specified keys exist in the object; otherwise, it should return false.

  interface Person {
    name: string;
    age: number;
    email: string;
  }

  const person: Person = {
    name: "Trishon Baidaya",
    age: 25,
    email: "shukanto@gmail.com",
  };

  const validateKeys = (obj: Person, keys: (keyof Person)[]): boolean => {
    let allKeysExist = false;
    keys.forEach((k) => {
      if (!(k in obj)) {
        allKeysExist = false;
      } else {
        allKeysExist = true;
      }
    });
    return allKeysExist;
  };

  const result1 = validateKeys(person, ["name", "age"]);
  // NOTE: I have made mistake on the result 2 intentionally, so that, i can show what if the result is false... that's why its showing error in the code...
  const result2 = validateKeys(person, ["name", "hasCar"]);
  console.log(
    "\n---------------- Solution of the Problem 06 ----------------\n"
  );
  if (result1) {
    console.log(
      `The object contains both the keys : name and age. Validation function returns: ${result1} `
    );
  } else {
    console.log(
      `The object doesn't contain both the keys : name and age. Validation function returns: ${result1} `
    );
  }
  if (result2) {
    console.log(
      `The object contains both the keys : name and hasCar. Validation function returns: ${result2}`
    );
  } else {
    console.log(
      `The object doesn't contain both the keys : name and hasCar. Validation function returns: ${result2} `
    );
  }
  // ------------------------------------------------------------------------------------
}
