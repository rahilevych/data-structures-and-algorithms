function linearSearch(arr, value) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === value) {
      return i;
    }
  }
  return -1;
}
const arr = [1, 2, 5, 8, 7, 9, 10];
console.log(linearSearch(arr, 9));
console.log(linearSearch(arr, 3));
