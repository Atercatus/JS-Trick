const arr = [
  [1, 2],
  [3, 4],
  [5, 6]
];
const flattenedArray = flatten(arr);
console.log(flattenedArray); //[1, 2, 3, 4, 5, 6];

function flatten(arr) {
  return arr.reduce((acc, cur) => {
    return [...acc, ...cur];
  }, []);
}
