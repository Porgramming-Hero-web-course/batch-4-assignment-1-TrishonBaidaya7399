{
  // Problem 05: Write a generic function getProperty that takes an object and a property name as arguments and returns the property value. Add a constraint to ensure the property name exists on the object.
  interface User {
    id: number;
    name: string;
    age: number;
    hasVehicle?: boolean;
  }

  const getProperty = <T extends {id: number}, B extends keyof T>(data: T, property: B) => {
    return data[property];
  };
  const user: User = {
    id: 123,
    name: "Trishon Baidaya",
    age: 25,
    hasVehicle: true,
  };
  console.log(
    "\n---------------- Solution of the Problem 05 ----------------\n"
  );
  console.log(`Find the name: ${getProperty(user, "name")}`);
  console.log(`Find the age: ${getProperty(user, "age")}`);
}
