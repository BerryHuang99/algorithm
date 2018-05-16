function defualtComparator(a, b) {
    let res = 0;
    if (a > b) {
      res = 1
    }
    return res;
}

function insertionSort(arr, comparator = defualtComparator) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < i; j++) {
            if (comparator(arr[j], arr[i])) {
                let t = arr[j];
                arr[j] = arr[i];
                arr[i] = t;
            }
        }
    }
}