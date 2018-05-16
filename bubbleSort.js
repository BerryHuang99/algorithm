function defualtComparator(a, b) {
  let res = 0;
  if (a > b) {
    res = 1
  }
  return res;
}

function bubbleSort(arr, comparator = defualtComparator) {
  if (Array.isArray(arr)) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {

          if (comparator(arr[j], arr[j + 1])) {
            let t = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = t;
          }

      }
    }
  }
  return arr;
}
