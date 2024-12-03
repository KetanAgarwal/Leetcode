/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let num = x.toString()
    let left = Math.ceil(num.length / 2)

    while (left > 0) {
        if (num[left] === num[num.length - 1 - left]) {
            left--
        } else {
            return false
            break;
        }
    }
    
    return true
};
