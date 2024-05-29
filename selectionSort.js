const selectionSort = (array) => {
  const n = array.length;

  for (let i = 0; i < n - 1; i++) {
    let minInd = i;

    for (let j = i + 1; j < n; j++) {
      if (array[j] < array[minInd]) {
        minInd = j;
      }
    }

    if (minInd !== i) {
      const temp = array[i];
      array[i] = array[minInd];
      array[minInd] = temp;
    }
  }
  return array;
};

const foo = [2, 1, 4, 10, 20, 25, 1000, -2, -5, -10, -20];
selectionSort(foo);
console.log(foo);
