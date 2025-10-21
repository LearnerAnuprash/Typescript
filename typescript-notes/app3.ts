//TODO *** If this was JS , we would make getters and setters like this => ****

class User {
  constructor(public name: string, public age: number) {}

  getName() {
    // Getters
    return this.name;
  }

  setName(value: string) {
    // Setters
    this.name = value;
  }
}

let u1 = new User("Harsh", 25);
u1.getName();

//TODO *** But in typescript , it is done like this :

class User2 {
  constructor(public _name: string, public age: number) {}

  get name() {
    return this._name; // The value which  is to be get is put is written as "_variableName" and "get" keyword is used
  }

  set name(value: string) {
    this._name = value; // "set" keyword is used to set value and this. keyword used to target the declared variable
  }
}
