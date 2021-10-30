// Функция поиска самого короткого слова
findShort('The Smallest word in sentence') //in
findShort('Just test string'); // Just

//Base
function findShort(str) {
    let wordsArr = str.split(' ');
    console.log(wordsArr);
    let sortedWordsArr = wordsArr.sort(function (a, b) {
        return a.length - b.length;
    });
    return sortedWordsArr[0];
}

//Advanced
function findShort(string) {
    return string.split(" ").sort(function (a, b) { return a.length - b.length; })[0];
}

console.log(findShort('The Smallest word in sentence')) //in
console.log(findShort('Just test string')); // Just

//ES6
const findShor = string => string.split(" ").sort((a, b) => { return a.length - b.length; })[0];
console.log(findShor('The Smallest word in sentence')) //in
console.log(findShor('Just test string')); // Just