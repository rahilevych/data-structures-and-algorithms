function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      temp = arr[j - 1];
      arr[j + 1] = arr[j];
      arr[j] = temp;
      j--;
    }
    arr[j + 1] = key;
  }
  return arr;
}
const arr = [21, 58, 6, 0, 99, 5, 7];
console.log(insertionSort(arr));
