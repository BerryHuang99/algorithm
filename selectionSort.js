function defualtComparator(a, b) {
    let res = 0;
    if (a > b) {
      res = 1
    }
    return res;
}

function selectionSort(arr, comparator = defualtComparator) {
    if (Array.isArray(arr)) {
        for (let i = 0; i < arr.length; i++) {
        let k = 0;
        let last = arr.length - i - 1;
        
        for (let j = 0; j <= last; j++) {
            if (comparator(arr[j], arr[k])) {
            k = j;
            }
        }
        
        let t = arr[k];
        arr[k] = arr[last];
        arr[last] = t;
        }
    }
    return arr;
}
