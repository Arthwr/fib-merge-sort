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
