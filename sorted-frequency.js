function sortedFrequency(arr, value) {
    let first = findFirst(arr, value);
    let last = findLast(arr, value);
    if (first === -1) return -1;
    return last + 1 - first;


}

function findFirst(arr, value) {
    let leftIdx = 0;
    let rightIdx = arr.length - 1;

    while (leftIdx <= rightIdx ){
        let middleIdx = Math.floor((leftIdx + rightIdx)/2);
        let middleVal = arr[middleIdx];

        if (middleVal < value) {
            leftIdx = middleIdx + 1;
        } else if (middleVal > value) {
            rightIdx = middleIdx - 1;
        } else if (middleVal === value && arr[middleIdx - 1] === value) {
            rightIdx = middleIdx -1;
        } else if (middleVal === value && arr[middleIdx -1] !== value) {
            return middleIdx
        }


    }
    return -1;
}

function findLast(arr, value) {
    let leftIdx = 0;
    let rightIdx = arr.length - 1;

    while (leftIdx <= rightIdx ){
        let middleIdx = Math.floor((leftIdx + rightIdx)/2);
        let middleVal = arr[middleIdx];

        if (middleVal < value) {
            leftIdx = middleIdx + 1;
        } else if (middleVal > value) {
            rightIdx = middleIdx - 1;
        } else if (middleVal === value && arr[middleIdx + 1] === value) {
            leftIdx = middleIdx + 1;
        } else if (middleVal === value && arr[middleIdx + 1] !== value) {
            return middleIdx
        }


    }
    return -1;
}

module.exports = sortedFrequency