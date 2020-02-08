const before = {
  val: 0
};

// const after = Object.assign({}, before);
const after = { ...before };

console.log(after);
