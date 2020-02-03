global.a = () => {
  /* test function */
};

const s = new (require("inspector").Session)();
s.connect();

let objectId;
s.post("Runtime.evaluate", { expression: "a" }, (err, { result }) => {
  objectId = result.objectId;
});
s.post("Runtime.getProperties", { objectId }, (err, { internalProperties }) => {
  console.dir(internalProperties);
});
