const repeatString = function(str, num) {
    if (num < 0) {
        return "ERROR";
    }
    if (num == 0 || str == "") {
        return "";
    }

    let resultat = "";

    for (let i = 0; i < num; i++) {
        resultat += str;
    }

    return resultat;
};

// Do not edit below this line
module.exports = repeatString;
