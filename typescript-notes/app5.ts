//TODO ***** Type Assertions *****//

let a: any = 12;
<number>a; //or
a as number;

//TODO ***** Type casting : *****//

let b = Number("12");
console.log(b);
console.log(typeof b);

//TODO ***** Non-null assertion operator //

let c: null | undefined | string;
c = "hey";

c!; // The syntax "c!.any_function()" guarantees that the variable c is not null or undefined at any case

//TODO ***** Type Guards  ***** //

function abcd(arg: string | number) {
  // whenever you try to access methods/properties related to string/num by using
  // arg.method_name() , it would only show the method / property common to both string and number in this case
  // To be able to use methods / properties relating to the specific datatype , we use use the following syntax

  if (typeof arg === "number") {
    // inside this if condition , the methods relating to numbers would show
  } else if (typeof arg === "string") {
    // Inside this if condition , methods relating to string would show
  } else {
    throw new Error("Errorwwkwkwkwkkwwkwkkwk");
  }
}

console.log(abcd(12));
console.log(abcd("hello"));

//TODO ***** Instance/type narrowing ***** //

class TvRemote {
  switchTvOff() {
    console.log("Switching off tv");
  }
}

class CarRemote {
  switchCarOff() {
    console.log("Switching car off");
  }
}

const tv = new TvRemote();
const car = new CarRemote();

function switchOffFunction(device: TvRemote | CarRemote) {
  if (device instanceof TvRemote) {
    device.switchTvOff();
  } else if (device instanceof CarRemote) {
    device.switchCarOff();
  }
}
