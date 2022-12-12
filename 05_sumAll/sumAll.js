const sumAll = function(x, y) {
    let total = 0;

    if (x < 0 || y < 0 || typeof(x) !== "number" || typeof(y) !== "number") {
        return "ERROR";
    }

    if (x < y) {
        for (x; x <= y; x++) {
            total += x;
        }
    } else if (x > y) {
        for (y; y <= x; y++) {
            total += y;
        }
    } else {
        return x;
    }

    return total;
};

// Do not edit below this line
module.exports = sumAll;
