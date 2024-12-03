/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows === 1) return s

    let finalString = ''

    for (let i = 0; i < numRows; i++) {
        let j = i
        let k = i
    
        while (j < s.length) {
            finalString = finalString + s[j]
            
            k = j + (numRows - i - 1) * 2
            j = j + (numRows - 1) * 2
            
            if (i > 0 && i < numRows - 1 && k < s.length) {
                finalString = finalString + s[k]
            }
        }
    }
    return finalString
};
