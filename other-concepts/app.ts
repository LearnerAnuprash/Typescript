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
