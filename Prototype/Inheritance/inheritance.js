function Parent() {
  this.x = 20;
}
// Parent.prototype.x = null;

function Child() {
  Parent.call(this);
}

Child.prototype = Object.create(Parent.prototype);
Child.prototype.constructor = Child;

Child.prototype.print = function() {
  console.log(this.x);
};

const child = new Child();
child.print();
