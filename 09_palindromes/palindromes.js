const palindromes = function (string) {

    string = string.toLowerCase();
    let palindrome = "";

    for (let i = string.length - 1; i >= 0; i--) {
        if ((/[a-z]/).test(string[i])) {
            palindrome += string[i];
        }
    }

    return palindrome == palindrome.split("").reverse().join("");
};

// Do not edit below this line
module.exports = palindromes;
