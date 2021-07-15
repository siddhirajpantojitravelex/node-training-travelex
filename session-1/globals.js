console.log(__dirname)
console.log(__filename)
console.log(process.argv)
console.log(process.argv[2])

setTimeout(function () {
    console.log("Inside Set Timeout ")
}, 2000)