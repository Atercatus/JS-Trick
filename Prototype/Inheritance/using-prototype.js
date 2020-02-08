function Parent() {}

Parent.prototype.x = 20;
Parent.prototype.minus = function() {
  this.x -= 10;
};

function Child() {}

// Child.prototype = Object.create(Parent.prototype);

// create 를 안하면 상위 객체의 프로토타입이 수정됨
Child.prototype = Parent.prototype;
Child.prototype.constructor = Child;
Child.prototype.print = function() {
  console.log(this.x);
};

const child = new Child();
child.print();
const parent = new Parent();
parent.print();
child.print();

console.log(Child.prototype.__proto__ === Object.prototype);
console.log(Child.__proto__.__proto__ === Object.prototype);
