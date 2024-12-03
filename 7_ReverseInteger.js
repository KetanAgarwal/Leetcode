/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let num = 0
    let i = x > 0 ? x : -1 * x
    
    while (Math.floor(i / 10) > 0) {
        num = num * 10 + i % 10
        i = Math.floor(i / 10)
    }
    num = x < 0 ? (-1 * (num * 10 + i)) : (num * 10 + i)
    if (num > Math.pow(2, 31) - 1 || num < -Math.pow(2, 31)) return 0
    return num
};
