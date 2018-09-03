// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

//way 2
function palindrome(str) {
    return str.split('')
        .every((char, i) => {
            return char === str[str.length - i - 1];
        })
}


//way 1
// function palindrome(str) {
//     let reversed = str.split("").reverse().join("");
//     if(str == reversed) return "This is plaindrome";
//     else return "This is not plaindrome";
// }

console.log(palindrome("Madam I'm Adam"));

module.exports = palindrome;
