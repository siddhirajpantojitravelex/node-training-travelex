console.log("Hello World ");

// Variable declarations 
/**
 * 1. var -> variable 
 * 2. let -> scope 
 * 3. const -> Constant 
 */
const X = 10
console.log(X);

var x = {
    "abc": "anb",
    "y": 1
}
console.log(typeof x)
x = 20
console.log(typeof x)


function called(name) {
    console.log("Welcome " + name)
    return "Welcome " + name
}
let value = called("Arbaz")
console.log(value)
called("Abdul")
console.log(called)

var calledMaster = function (name) {
    return "hello To the star" + name
}
console.log(calledMaster)
console.log(calledMaster("Sidd"))

function callbackMaster(name, yearOfBirth, display) {
    let age = calculateAge(yearOfBirth)
    return display("name : " + name + " Age: " + age)
}
let calculateAge = function (yearOfBirth) {

    return (new Date().getFullYear() - yearOfBirth)
}
let year = 1990
callbackMaster("Sidd", 1990, function (arg) {
    console.log("Inside Dsip Function")
    console.log(arg)
})

for (var i = 0; i < 10; i++) {
    console.log(i)
}
console.log("Last " + i)
