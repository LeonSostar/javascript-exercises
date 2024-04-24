const fibonacci = function(x) {
    if (x == 0) {
        return 0;
    }
    if (x < 0) {
        return 'OOPS';
    }
    let firstPrev = 1;
    let secondPrev = 0;
    for (let i = 2; i <= x; i ++) {
        let curr = firstPrev + secondPrev;
        secondPrev = firstPrev;
        firstPrev = curr;
    }
    return firstPrev;
};

// Do not edit below this line
module.exports = fibonacci;
