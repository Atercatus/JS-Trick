const a = {
  tag: "a",
  name: "anaeme",
  print() {
    console.log(this.tag, this.name);
  }
};

const b = {};

for (const property in a) {
  b[property] = a[property];
}

b.print();
