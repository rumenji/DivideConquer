function findRotatedIndex(arr, value) {
    // let leftIdx = 0;
    // let rightIdx = arr.length - 1;
    return findIndex(arr, value)

}

function findIndex(arr, value, low = 0, high = arr.length - 1) {
    if (high >= low) {
        let mid = low + Math.floor((high - low) / 2)
        if (arr[mid] === value) {
            return mid;
        } else if (arr[low] <= value && value < arr[mid]) {
            return findIndex(arr, value, low, mid-1)
        }
        return findIndex(arr, value, mid+1,  high)
    }
    return -1;
}

module.exports = findRotatedIndex