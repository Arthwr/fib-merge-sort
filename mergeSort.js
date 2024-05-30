const merge = (arr, left, mid, right) => {
  const temp = [];
  let i = left;
  let j = mid + 1;
  let k = 0;

  while (i <= mid && j <= right) {
    if (arr[i] < arr[j]) {
      temp[k++] = arr[i++];
    } else {
      temp[k++] = arr[j++];
    }
  }

  for (; i <= mid; i++) {
    temp[k++] = arr[i];
  }
  for (; j <= right; j++) {
    temp[k++] = arr[j];
  }

  for (let i = 0; i < temp.length; i++) {
    arr[left + i] = temp[i];
  }
};

const mergeSort = (arr, left = 0, right = arr.length - 1) => {
  if (left < right) {
    const mid = Math.floor((left + right) / 2);
    mergeSort(arr, left, mid);
    mergeSort(arr, mid + 1, right);
    merge(arr, left, mid, right);
  }
};

const foo = [3, 2, 1, 13, 8, 5, 0, 1];
const bar = [105, 79, 100, 110];
mergeSort(foo);
mergeSort(bar);
console.log(foo);
console.log(bar);

// Slightly better written mergeSort
// Can also filter subarrays
const merge_ = (left, right) => {
  let sortedArr = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      sortedArr.push(left[leftIndex]);
      leftIndex++;
    } else {
      sortedArr.push(right[rightIndex]);
      rightIndex++;
    }
  }

  while (leftIndex < left.length) {
    sortedArr.push(left[leftIndex]);
    leftIndex++;
  }

  while (rightIndex < right.length) {
    sortedArr.push(right[rightIndex]);
    rightIndex++;
  }

  return sortedArr;
};

const mergeSort_ = (array, start = 0, end = array.length - 1) => {
  if (end - start <= 0) return array.slice(start, end + 1);

  let mid = Math.floor((start + end) / 2);
  let left = mergeSort_(array, start, mid);
  let right = mergeSort_(array, mid + 1, end);

  return merge_(left, right);
};

const foobar = [5, 8, 3, 2, 0, 7, 1, 6, 9, 4];
const sortedFoobar = mergeSort_(foobar);
console.log(sortedFoobar);
