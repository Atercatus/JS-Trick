function Parent(value) {
  this.value = value;
}

Parent.prototype.fn = function() {
  console.log(this.value);
};

function Child(value) {
  Parent.call(this, value);
}

Child.prototype = Object.create(Parent.prototype);
Child.prototype.constructor = Child;

const c = new Child(5);
c.fn();
