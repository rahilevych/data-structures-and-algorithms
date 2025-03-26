class CustomArray {
  constructor() {
    this.data = {};
    this.length = 0;
  }

  push(value) {
    this.data[this.length] = value;
    this.length++;
  }
  pop() {
    if (this.length === 0) return undefined;
    const lastElem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastElem;
  }
  get(index) {
    return this.data[index];
  }
  set(index, value) {
    if (index >= this.length || index < 0) throw Error('Index out of bounds');
    this.data[index] = value;
  }
  delete(index) {
    if (index >= this.length || index < 0) return;

    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}
const arr = new CustomArray();
arr.push(4);
arr.push(5);
arr.push(7);
arr.delete(0);
console.log(arr.data);
