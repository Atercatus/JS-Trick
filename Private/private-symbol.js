class Test {
  constructor() {
    this.a = Symbol("a");
    this[this.a] = 10;
    this.b = Symbol("b");
    this[this.b] = 20;
  }

  getValue() {
    return this.a;
  }
}

const test = new Test();
console.log(test.getValue());
