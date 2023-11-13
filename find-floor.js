function findFloor(arr, value) {
    let leftIdx = 0;
    let rightIdx = arr.length - 1;
    let floor = null;
    if (arr[0] > value) {
        return -1;
    }

    while (leftIdx <= rightIdx) {
        let midIdx = Math.floor((rightIdx + leftIdx) / 2);
        let midVal = arr[midIdx];
        if (midVal === value) {
            return value
        } else if (midVal > value) {
            rightIdx = midIdx - 1;
        } else {
            leftIdx = midIdx + 1;
        }
        floor = midVal
    }
    return floor
}

module.exports = findFloor