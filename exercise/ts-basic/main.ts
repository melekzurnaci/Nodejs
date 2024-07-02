let firstName: string = "John";

let age: number | string = 22; // or "22"

let obj: { firstName: string; age: number | string };
// Let's define the interface to be used instead of the object return type { age: number | string; firstName: string }
// function createUser(
//   firstName: string,
//   age: number | string
// ): { age: number | string; firstName: string } {
//   return { age, firstName };
// }

interface User {
  age?: number | string;
  firstName: string;
}

function createUser(firstName: string, age: number | string): User {
  return { firstName, age };
}
let user = createUser("Bella", 23);

user.age;

// generics login interface
interface Login<Pwd> {
  email: string;
  password: Pwd;
}

interface Member {
  userName: string;
  status: MemberStatus;
}

enum MemberStatus {
  Active = "Active",
  Inactive = "Inactive",
  New = "New",
}
type PasswordType = string | number;
type LoginResult = Promise<boolean | Member>;

async function login(loginArgs: Login<PasswordType>): LoginResult {
  if (loginArgs.email === "email" && loginArgs.password === "password") {
    return { userName: "Bella", status: MemberStatus.Active };
  } else {
    return false;
  }
}

login({ email: "email", password: "password" }).then((result) => {
  if (!result) return;
  // Type guard: Check if result is a Member
  if (typeof result !== "boolean" && result.status === MemberStatus.Active)
    console.log("user is active");
});
