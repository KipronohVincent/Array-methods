// Reversing array of objects using reverse method

let person = [{
    name: 'Mark',
    age: 14,
    title: 'Mr',
    description: 'This is me',
    location: 'London',
}];

let reversedPerson = person.reverse();
for(let i = 0; i < reversedPerson.length; i++) {
    console.log(reversedPerson[i]);
}


// Reversing array of strings.

let sentence = ["yes", "no", "maybe", "always", "sometimes", "never", "if"];

function reversedSentence(name) {
    let reversedSentence = [];
    for (let i = name.length - 1; i >= 0; i--) {
        reversedSentence.push(name[i]);
    }
    return reversedSentence;
}

// for…of loop:

let detail = [
    { name: 'Max', age: 23 },
    { name: 'John', age: 20 },
    { name: 'Caley', age: 18 }
];
 
for (const key of Object.keys(detail)) {
    console.log(detail[key]);
}