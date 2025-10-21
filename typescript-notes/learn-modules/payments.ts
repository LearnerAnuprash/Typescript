export function addPayments(a: number, b: number): number {
  // use export keyword before the function declaration
  return a + b;
}

export function getDetails() {}

// TODO ***** To export/import a class  ******

export default class payment {
  constructor(public amount: number) {}
}
