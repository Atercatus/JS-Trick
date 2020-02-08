const arr1 = Array(5)
  .fill(null)
  .map(() => {
    return Array(5).fill(0);
  });

console.log(arr1);
arr1[4][4] = 1;
console.log(arr1);

const arr2 = Array.from(Array(5), () => {
  return Array(5).fill(0);
});

console.log(arr2);
arr2[2][4] = 4;
console.log(arr2);
