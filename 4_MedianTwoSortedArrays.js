/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let mergedArray = mergeArray(nums1, nums2)
    let median = 0
    if (mergedArray.length % 2 === 0) {
        median = (mergedArray[mergedArray.length / 2 - 1] + mergedArray[mergedArray.length / 2]) / 2
    } else {
        median = mergedArray[Math.floor(mergedArray.length / 2)]
    }
    
    return median
};

const mergeArray = (arr1, arr2) => {
    let i = 0
    let j = 0

    mergedArray = []
    while (arr1[i] !== undefined && arr2[j] !== undefined) {
        if (arr1[i] <= arr2[j]) {
            mergedArray.push(arr1[i])
            i = i + 1
        } else if (arr1[i] > arr2[j]){
            mergedArray.push(arr2[j])
            j = j + 1
        }
    }
    
    if (arr1[i] === undefined) {
        while (arr2[j] !== undefined) {
            mergedArray.push(arr2[j])
            j = j + 1
        }
    }
    
    if (arr2[j] === undefined) {
        while (arr1[i] !== undefined) {
            mergedArray.push(arr1[i])
            i = i + 1
        }
    }

    return mergedArray
}
