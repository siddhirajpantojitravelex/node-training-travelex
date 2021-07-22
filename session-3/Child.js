let parent = require('./csvReader')
class Child extends parent {
    childFunc() {
        console.log("Inside Child function ")
    }
}
module.exports = Child