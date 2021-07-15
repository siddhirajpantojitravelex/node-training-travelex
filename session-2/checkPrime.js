
function checkPrime(n) {
    // Check if the number is Prime or not 
    if (!n) {
        return false
    }
    if (n < 2) {
        return false
    }
    for (let check = 2; check <= (n / 2); check++) {
        if (n % check == 0) {
            return false
        }
    }
    return true
}
function abc() {
    console.log("|")
}
module.exports = {
    "primeCheck":checkPrime, abc
}