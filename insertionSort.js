const insert = (array, rightIndex, value) => {
  let i;
  for (i = rightIndex; i >= 0 && array[i] > value; i--) {
    array[i + 1] = array[i];
  }
  array[i + 1] = value;
};

const insertionSort = (array) => {
  for (let i = 1; i < array.length; i++) {
    insert(array, i - 1, array[i]);
  }
};

const foo = [22, 11, 99, 88, 9, 7, 42];
insertionSort(foo);
console.log(foo);

const insertionSort_ = (array) => {
  for (i = 1; i < array.length; i++) {
    let currentValue = array[i];
    let sortedIndex = i - 1;

    while (sortedIndex >= 0 && array[sortedIndex] > currentValue) {
      array[sortedIndex + 1] = array[sortedIndex];
      sortedIndex--;
    }
    array[sortedIndex + 1] = currentValue;
  }
};

const array = [5, 2, 9, 1, 5, 6];
insertionSort_(array);
console.log(array); 