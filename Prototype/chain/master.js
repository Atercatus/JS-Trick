function Person() {}

const person = new Person();

console.log(person.__proto__ === Person.prototype);
console.log(Person.__proto__ === Function.prototype);
console.log(Person.prototype.constructor === Person);
console.log(Person.prototype.__proto__ === Object.prototype);
console.log(Function.__proto__ === Function.prototype);
console.log(Function.prototype.constructor === Function);
console.log(Function.prototype.__proto__ === Object.prototype);
console.log(Function.__proto__.__proto__ === Object.prototype);
console.log(Object.__proto__ === Function.prototype);
console.log(Object.prototype.__proto__ === null);
console.log(Object.prototype.constructor === Object);

function Test() {
  this.value = 0;
}

const before = new Test();

Test.prototype = {
  another: 3
};

const after = new Test();

console.log(before);
console.log(after);

console.log(before.__proto__.constructor === Test);
console.log(after.__proto__.constructor === Object);

Test;
