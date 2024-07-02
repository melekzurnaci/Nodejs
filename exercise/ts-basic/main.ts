let firstName: string = "John";

let age: number | string = 22; // or "22"

let obj: { firstName: string; age: number | string };

function createUser(
  firstName: string,
  age: number | string
): { age: number | string; firstName: string } {
  return { age, firstName };
}

let user = createUser("Bella", 23);

user.age;
