/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let finalList = addNumbers(l1, l2, 0)
    return finalList
};

const addNumbers = (arr1, arr2, carry) => {
    let finalList = null

    if (arr1 || arr2) {
        sum = (arr1.val || 0) + (arr2.val || 0) + carry
        finalList = new ListNode(0, null)
        finalList.val = sum % 10
        finalList.next = addNumbers(arr1.next || 0, arr2.next || 0, Math.floor(sum / 10))
    } else if (carry) {
        finalList = new ListNode(0, null)
        finalList.val = carry
    }

    return finalList
}
