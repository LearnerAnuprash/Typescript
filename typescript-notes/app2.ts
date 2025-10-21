//TODO *** Creating a class and accessing it using an object *** //

class BottleMaker {
  constructor(public name: string, public price: number) {}
}

let b1 = new BottleMaker("Milton", 1200);

//TODO *** Another class Example *** //

class HumanMaker {
  age = 0;
  constructor(name: String) {}
}

let h1 = new HumanMaker("Anuprash");

//TODO **** Using this. keyword **** //

//? Two ways of using this. keyword . ( 1st one is : ) ************

class BubbleGum {
  constructor(public quantity: number, public brand: string) {
    this.quantity = quantity;
    this.brand = brand;
  }
}

//? Another method of using this.keyword . ( 2nd one is :) ***********

class ChewingGum {
  public quantity; // 'this' keyword is referring to this value initialized from the constructor .
  public brand;
  constructor(quantity: number, brand: string) {
    // template value parsing
    this.quantity = quantity;
    this.brand = brand;
  }
}

//TODO  Public and Private Access Modifier

class Movie {
  constructor(public name: string) {} // change public to private and experiment yourself
}

let m1 = new Movie("Kuch Kuch Hota hai");
m1.name = "I";

// TODO Extending a class

class phone {
  constructor(protected brand: string) {} // Experiment this by making private and public
}

class wifi extends phone {
  constructor(public range: string) {
    super(range);
  }

  getValue() {
    console.log(this.brand);
  }
}

let w1 = new wifi("Apple");
w1.getValue();

// Private = can be accessed & changed from only within the class itself
// protected = can be accessed & changed  from all the classes extended from the parent class i.e. inherited
// public = can be accessed & changed  from anywhere and even outside inherited classes

//TODO Optional property ' readonly '

// If you want a variable or property to not change even when the user changes its value,
// you may use readonly syntax after the access specifier ( public, private .....)

//?Example :

class User {
  constructor(public readonly name: string) {}

  changeName() {
    this.name = "hellyow"; // throws error that 'name' is readononly and  cannot be changed
  }
}

//TODO ******** END OF TOPIC ******** //

//! Note : Use ' better comments extension ' for structured and clear readability of these notes
// - Anuprash
