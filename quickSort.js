const swap = (array, firstIndex, secondIndex) => {
  const temp = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = temp;
};

const partition = (array, pivot, right) => {
  let q = pivot;
  for (let j = pivot; j <= right - 1; j++) {
    if (array[j] <= array[right]) {
      swap(array, j, q);
      q++;
    }
  }
  swap(array, q, right);
  return q;
};

const quickSort = (array, left, right) => {
  if (left < right) {
    const pivot = partition(array, left, right);
    quickSort(array, left, pivot - 1);
    quickSort(array, pivot + 1, right);
  }
};

const foo = [9, 7, 5, 11, 12, 2, 14, 3, 10, 6];
quickSort(foo, 0, foo.length - 1);
console.log("Array after quicksort: ", foo);
