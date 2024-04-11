let input = 'Hello I am Marion';
console.log('Sentence to translate: ' + input);

input = input.toLowerCase();

let vowels = ['a', 'e', 'i', 'o', 'u'];

let resultArray = [];

for(let i = 0; i < input.length; i++) {
    // console.log(i);
    if (input[i] === 'e' || input[i] === 'u') {
        resultArray.push(input[i]);
    } 

    for(let j = 0; j < vowels.length; j++) {
        // console.log(j);
        if (input[i] === vowels[j]) {
            resultArray.push(input[i]);
        }
    } 
}

// console.log(resultArray);

let resultString = resultArray.join('').toUpperCase();
console.log('Translation in whale talk: ' + resultString);