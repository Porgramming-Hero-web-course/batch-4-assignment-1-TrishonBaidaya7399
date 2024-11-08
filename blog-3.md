# Why are Type Guards Necessary?

TypeScript is known for adding type safety to JavaScript, enabling developers to catch errors at compile-time rather than at runtime. However, there are scenarios where TypeScript’s static type system may not have enough information to accurately infer types, especially in the case of union or unknown types. This is where **type guards** become crucial. Type guards help TypeScript narrow down the type of a variable within a specific block of code, allowing developers to write code that is both safe and precise.

## Type guards are necessary to:

1. **Ensure Type Safety**: They provide a way to confirm the type of a variable before performing operations, thus avoiding runtime errors.
2. **Enable IntelliSense**: Type guards enhance TypeScript’s IntelliSense support, providing relevant autocomplete suggestions based on the narrowed type.
3. **Improve Code Readability**: By explicitly stating the type, type guards make code easier to read and understand, as they clarify the types being worked with.
4. **Optimize Performance**: They help TypeScript perform more efficient code transformations by reducing unnecessary type checks.

In this post, we’ll explore different types of type guards and demonstrate their use cases with practical examples.

## Built-in Type Guards

### `typeof` Type Guard

The `typeof` operator is one of the simplest ways to perform type checking in TypeScript. It is most commonly used with primitive types like `string`, `number`, `boolean`, etc.

#### Example

```typescript
function printLength(input: string | number) {
  if (typeof input === "string") {
    console.log(`String length: ${input.length}`);
  } else {
    console.log(`Number of digits: ${input.toString().length}`);
  }
}

printLength("Hello"); // Output: String length: 5
printLength(1234); // Output: Number of digits: 4
```

### `instanceof` Type Guard

The instanceof operator is used to check if an object is an instance of a specific class. This is useful when working with class-based objects in TypeScript.

#### Example

```typescript
class Dog {
  bark() {
    console.log("Woof!");
  }
}

class Cat {
  meow() {
    console.log("Meow!");
  }
}

function animalSound(animal: Dog | Cat) {
  if (animal instanceof Dog) {
    animal.bark();
  } else if (animal instanceof Cat) {
    animal.meow();
  }
}

animalSound(new Dog()); // Output: Woof!
animalSound(new Cat()); // Output: Meow!
```

## User-Defined Type Guards

### Custom Type Guard Functions

Custom type guard functions return a boolean and use the parameter is Type syntax. This enables TypeScript to infer the type inside the block where the type guard returns true.

#### Example

```typescript
type Fish = { swim: () => void };
type Bird = { fly: () => void };

function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

function petAction(pet: Fish | Bird) {
  if (isFish(pet)) {
    pet.swim();
  } else {
    pet.fly();
  }
}

const fish: Fish = { swim: () => console.log("Swimming") };
const bird: Bird = { fly: () => console.log("Flying") };

petAction(fish); // Output: Swimming
petAction(bird); // Output: Flying
```

## `in` Operator Type Guard

The in operator checks if a specific property exists on an object. This type guard is helpful for distinguishing between objects with different properties, especially in union types.

#### Example

```typescript
type Car = { drive: () => void };
type Boat = { sail: () => void };

function vehicleAction(vehicle: Car | Boat) {
  if ("drive" in vehicle) {
    vehicle.drive();
  } else {
    vehicle.sail();
  }
}

const car: Car = { drive: () => console.log("Driving") };
const boat: Boat = { sail: () => console.log("Sailing") };

vehicleAction(car); // Output: Driving
vehicleAction(boat); // Output: Sailing
```

## Discriminated Union Type Guards

Discriminated unions involve types that share a common property, which acts as a discriminator. TypeScript can use this property to narrow down the exact type of the variable.

#### Example

```typescript
interface Square {
  kind: "square";
  size: number;
}

interface Rectangle {
  kind: "rectangle";
  width: number;
  height: number;
}

interface Circle {
  kind: "circle";
  radius: number;
}

type Shape = Square | Rectangle | Circle;

function getArea(shape: Shape) {
  switch (shape.kind) {
    case "square":
      return shape.size * shape.size;
    case "rectangle":
      return shape.width * shape.height;
    case "circle":
      return Math.PI * shape.radius * shape.radius;
    default:
      return 0;
  }
}

console.log(getArea({ kind: "square", size: 5 })); // Output: 25
console.log(getArea({ kind: "rectangle", width: 4, height: 5 })); // Output: 20
console.log(getArea({ kind: "circle", radius: 3 }).toFixed(2)); // Output: 28.27
```
