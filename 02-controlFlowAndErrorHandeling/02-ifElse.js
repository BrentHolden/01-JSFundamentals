let money = false

if (money) {
    console.log('Starbucks')
} else {
    console.log('Nope');
}

let weather = 75

if (weather < 70) {
    console.log('Wear a jacket')
} else { 
    console.log('No jacket needed')
}

let name = "Brent"
                      // if (name) will check to see if the variable is defined at all, and will return true if it is defined and return false if the variable is undefined. if (name ===) checks to see if the variable definition matches the conditional definition
if (name) {
    console.log('Hello, my name is ' + name + '.')
    console.log(`Hello, my name is ${name}.`)
} else {
    console.log ('Hello, what is your name?')
}

/*et myName = 'RIJDFOIoisdjfosidfjSDOIFJSDfijsdfoij';
let myName2 = `${myName[0].toUpperCase()}${myName.slice(1).toLowerCase()}`
console.log(myName2);

let bName = 'BrEnT'

if (bName[0] === bname[0].toUpperCase()) {
let firstLetter = str [0]+ bName(1).toLowerCase()
console.log(firstLetter)
} else {

}*/


let bWeather = 40

if (weather > 80) { 
    console.log('Wear a t-shirt.')
} else if (weather <= 70 && weather > 50) {
    console.log('Wear a light jacket')

} else {
    console.log('Stay inside.')
}

let age = 5;

if (age <= 17) {
    console.log('You can\'t do anything!')
} else if (age >= 18 && age < 21) {
    console.log('You can vote!')
} else if (age >= 21 && age < 25) {
    console.log('You can drink!')
} else {
    console.log('You can rent a car!')
}

//could have done this by starting from the oldest age and working down, since the else if stops evaluating when it reaches a true statement.

if (age >= 25) {
    console.log('You can rent a car!')
} else if (age >= 21) {
    console.log('You can drink')
} else if (age >= 18) {
    console.log('You can vote!')
} else {
    console.log('whomp whomp')
}