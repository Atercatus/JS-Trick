function makeClosure() {
  const val = 3;

  return function print() {
    console.log(val);
  };
}

const closure = makeClosure();
closure();
