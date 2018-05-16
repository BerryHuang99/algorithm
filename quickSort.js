function defualtComparator(a, b) {
    let res = 0;
    if (a > b) {
      res = 1
    }
    return res;
}

function quickSort(arr, comparator = defualtComparator) {
    if (arr.length <= 1) {
        return arr;
    }

    let range = [0, Math.floor(arr.length / 2), arr.length - 1];

    for (let i = 0; i < range.length; i++) {
        for (let j = 0; j < range.length - i - 1; j++) {
            if (arr[range[j]] > arr[range[j + 1]]) {
                let t = range[j];
                range[j] = range[j + 1];
                range[j + 1] = t;
            }
        }
    }

    let middle = range[1];

    let left = arr.filter((value, index) => {
        return index != middle && !comparator(value, arr[middle]);
    });
    let right = arr.filter((value, index) => {
        return index != middle && comparator(value, arr[middle]);
    });

    return quickSort(left).concat(arr[middle], quickSort(right));
}