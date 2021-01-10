//Task 2
function getNumStr(arr) {
    let countString = 0,
        countNumber = 0;

    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "string") {
            ++countString
        }
        if (typeof arr[i] === "number") {
            ++countNumber
        }
    }

    return `Numbers: ${countNumber}, String: ${countString}`

}

console.log(getNumStr([1, '10', 'hi', 2, 3]));
console.log(getNumStr([1, 4, 'i am a string', '456']));


//Task 4
function findsLongestWord(str) {

    let wordArray = str.split(" ");

    let longesWord = "";

    for (let i = 0; i < wordArray.length; i++) {

        if (wordArray[i].length >= longesWord.length) {
            longesWord = wordArray[i]
        }

    }
    return longesWord

}

console.log(findsLongestWord("A revolution without dancing is a revolution not worth having."));
console.log(findsLongestWord("Which would be worse - to live as a monster, or to die as a good man?"));