const repeatString = function (text, numTimes) {
    if (numTimes < 0) {
        return 'ERROR'
    }
    if (typeof text !== 'string') {
        return 'You need to pass a string to repeat'
    }
    return text.repeat(numTimes)
};

// Do not edit below this line
module.exports = repeatString;