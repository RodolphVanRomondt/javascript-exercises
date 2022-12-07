const reverseString = function(str) {

    let resultat = "";

    for (let i = str.length - 1; i >= 0; i--) {
        resultat += str[i]
    }

    return resultat;
};

// Do not edit below this line
module.exports = reverseString;
