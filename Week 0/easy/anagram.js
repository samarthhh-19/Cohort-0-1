/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
    //normalize : remove space
    const normalize = str => str.replace(/\s + /g, '').toLowerCase();
    str1 = normalize(str1);
    str2 = normalize(str2);

    if (str1.length != str2.length) return false;

    // split it array then sort then join and compare
    return str1.split('').sort().join('')=== str2.split('').sort().join('')
}

console.log(isAnagram('listen','silent'));
console.log(isAnagram('rasp','spar'));
console.log(isAnagram('hello','world'));