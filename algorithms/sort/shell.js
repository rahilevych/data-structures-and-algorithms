function shellSort(arr) {
  for (
    let gap = Math.floor(arr.length / 2);
    gap > 0;
    gap = Math.floor(gap / 2)
  ) {
    for (let i = gap; i < arr.length; i++) {
      let temp = arr[i];
      let j = i;
      while (j >= gap && arr[j - gap] > temp) {
        arr[j] = arr[j - gap];
        j -= gap;
      }
      arr[j] = temp;
      console.log('gap' + gap + 'arr ' + arr);
    }
  }
}
const arr = [21, 58, 6, 0, 99, 5, 7];
shellSort(arr);
