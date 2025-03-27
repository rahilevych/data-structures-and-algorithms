function quickSort(arr) {
  const pivot = arr[0];
  const left = [];
  const right = [];
  if (arr.length <= 2) return arr;

  for (let i = 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quickSort(left).concat(pivot, quickSort(right));
}
const arr = [21, 58, 6, 0, 99, 5, 7];
console.log(quickSort(arr));
