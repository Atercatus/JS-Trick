class Obj {
  constructor() {
    this.var = 3;
  }

  fn() {
    console.log(this.var);
  }
}

const obj = new Obj();

for (const prop in obj) {
  console.log(prop);
}

Object.keys(obj).forEach(prop => {
  console.log(prop);
});

const t = {
  var: 3,
  fn() {
    console.log(this.var);
  }
};

Object.keys(t).forEach(prop => {
  console.log(prop);
});
