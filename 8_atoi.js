/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    const num = parseInt(s)
    if (Boolean(num)) {
        if (num > Math.pow(2, 31) - 1) return Math.pow(2, 31) - 1
        else if (num < Math.pow(-2, 31)) return Math.pow(-2, 31)
        return num
    }
    else return 0
};
