function Parent(value) {
  this.value = value;
}

Parent.prototype = {
  printA() {
    console.log(this.value);
  }
};

function Child(value) {
  Parent.call(this, value);
}

Child.prototype = Object.create(Parent.prototype);
Child.prototype.printB = function() {
  console.log(this.value);
};

Child.prototype.constructor = Child;

const child = new Child(3);
child.printA();
child.printB();
