// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// way 3
function reverse(str){
    let reverse="";
    return str.split('').reduce((reverse,value)=> reverse = value+reverse);
}

//way 2
// function reverse(str){
//     let reversedWord = "";
//     for(let char of str){
//         reversedWord=char + reversedWord;
//     }
//     return reversedWord;
// }

//Way 1
// function reverse(str) {
//     return str.split("").reverse().join("")
// }

console.log(reverse("Sathish kumar"));

module.exports = reverse;
