function bubble_sort(array) {
  const n = array.length;
  for (let i = 0; i < n - 1; i += 1) {
    for (j = 0; j < n - 1; j += 1) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
  }
  return array;
}

const array = [34, 56, 22, 62, 6, 13, 67, 1, 9];

console.log(bubble_sort(array));
