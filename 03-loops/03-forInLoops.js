/*var student = { name: "Harry", awesome: true, degree: "JavaScript", week: 1};

for (item in student) {
    console.log(item);
    console.log(student[item]);
}

var pieArray = ['cherry', 'apple', 'chocolate peanut butter', 'chicken pot'];

for (pie in pieArray) {
    console.log(pie);
}*/

/*let studentName = 'hubert'
let nameLetters = studentName.split("");

for (firstLetter in nameLetters) {
    console.log(firstLetter);
}*/

var studentName = 'hArRy';
var capName;

for (let n in studentName) {
    if (n == 0) {
        capName = studentName[n].toUpperCase();
    } else {
        capName += studentName[n].toLowerCase();
    }
}

console.log(capName);