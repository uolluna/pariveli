function createArray(N) {
  let newArr = Array.from(Array(N), (_, index) => index + 1);
  return newArr;
}

let N = 12;
let arr = createArray(N);
console.log(arr);  // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
