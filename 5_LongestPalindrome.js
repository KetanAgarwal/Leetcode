/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let left = right = 0
    let maxEvenString = ''
    let maxOddString = ''

    for (let i = 0; i < s.length; i++) {
        maxEvenString = checkPalindrome(s, i, i + 1, maxEvenString)
        maxOddString = checkPalindrome(s, i, i, maxOddString)
    }

    if (maxEvenString.length > maxOddString.length) {
        return maxEvenString
    }
    return maxOddString
};

var checkPalindrome = function(s, left, right, maxString) {
    let tempString = ''
    while (left >= 0 && right < s.length && (s[left] === s[right])) {
        left--
        right++
    }
    tempString = s.slice(left + 1, right)
    if (tempString.length > maxString.length) {
        return tempString
    }
    return maxString
}
