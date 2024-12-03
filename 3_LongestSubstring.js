/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let maxString = ''
    let finalString = ''
    let left = 0
    let right = 0
    
    while(right < s.length) {
        if (maxString.includes(s[right])) {
            maxString = maxString.substr(1)
            left++
        } else {
            maxString = maxString + s[right]
            finalString = finalString.length >= maxString.length ? finalString : maxString
            right++
        }
    }
    return finalString.length
};
