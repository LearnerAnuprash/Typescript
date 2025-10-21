//TODO ***Static members in TS //

class Android {
  static version = 1.0; // Using static , we could access the version
  // without using [ new Android i.e without using 'new' keyword]

  static getRandomNumber() {
    return Math.random(); // Using static
  }
}

// The static members are not included in the instances of the class .
// i.e. if you create an object , and then try to access the memebers inside the class, the static
// members wouldn't show .

//TODO ***** ABSTRACT CLASSES ***** //

class Payment {
  constructor(protected amount: number, protected name: string) {}
}

class eSewa extends Payment {
  // we inherit other classes from a base class Payment .
  constructor(private gateawayKey: number, private password: string) {
    super(gateawayKey, password);
  }
}

class khalti extends Payment {
  // we inherit other classes from a base class Payment .
  constructor(private gateawayKey: number, private password: string) {
    super(gateawayKey, password);
  }
}

//TODO ***** Functions in TypeScript ***** //

function abcd(name: string, age: number, cb: (arg: string) => void) {}

abcd("Anuprash", 20, (arg: string) => {
  console.log(arg);
}); // In the third argument of the function ,
// we passed the arrow function itself

// TODO  Optional & Default parameters in Functions

function abcdef(name: string, age: number, gender?: string) {} // Optional parameter :  [ ?: string ]

abcdef("harsh", 25, "male");
abcdef("ram", 17); // Optional parameter gender

//TODO  Defaut parameters

function abc(name: string, gender: string = "not to be disclosed") {
  // default argument
  console.log(name, gender);
}

abc("Anuprash");

//TODO ***** Functions: Rest Parameters *****

function ram(...args: number[]) {
  // Rest operator is : " ... "
}

ram(1, 2, 3, 4, 5, 6, 7, 8, 89, 9, 0);

// If we put '...' in a parameter of function , we are putting the whole array into a single variable as an array

function friends(...arr: string[]) {
  console.log(arr);
}

friends("Anuprash", "Ravi", "Gotam", "Jack");

//Using spread operator [...]

var arr = [1, 2, 3, 4, 5];
var arr2 = [...arr];

//TODO ***** Function Overloading ********
// TS implementing signature
function dus(a: string): void;
function dus(a: string, b: number): void;

function dus(a: any, b?: any) {
  if (typeof a === "string" && b === undefined) {
    console.log("Only one number");
  }

  if (typeof a === "string" && typeof b === "number") {
    console.log("two params functioin is run");
  } else {
    throw new Error("Somethig is wrong !");
  }
}

dus("Hey");
dus("Hello", 25);

// TODO ****** GENERICS ********

function multi<H>(a: H, b: string, c: number) {}
// USe <H> or <T> or <variable_name> to create a template for initialization of data type

multi<string>("Anurpash", "Subedi", 20);

//? ANother example of a generic

function log<T>(val: T) {
  console.log(val);
}

log<string>("hey"); // We could also write as : log("Hey")

//?Another example

interface food<T> {
  name: string;
  price: number;
  code: T;
}

function restaurant(obj: food<string>) {}

restaurant({ name: "Momos", price: 150, code: "PATHAO12345" });

//? Another Generic Example

class BottleMaker<T> {
  constructor(public key: T) {}
}

let b1 = new BottleMaker<string>("ABCD");

let b2 = new BottleMaker<number>(12);

//? ANother Example

function monitor<T>(a: T, b: T): T {
  return "hey"; // This would not work because this manual string is known as a string literal i.e. we have literally put this string
  //to make this work we could :

  return "hey" as T;
  //or
  return <T>"hey";
}

monitor<string>("Anuprash", "Subedi");
