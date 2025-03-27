function merge(left, right) {
  let array = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      array.push(left[leftIndex]);
      leftIndex++;
    } else {
      array.push(right[rightIndex]);
      rightIndex++;
    }
  }
  return array.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  const half = Math.floor(arr.length / 2);

  const left = arr.slice(0, half);
  const right = arr.slice(half);
  return merge(mergeSort(left), mergeSort(right));
}

const arr = [21, 58, 6, 0, 99, 5, 7];
const sortedArr = mergeSort(arr);
console.log(sortedArr);
