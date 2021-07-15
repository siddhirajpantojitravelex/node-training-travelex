let fs = require('fs')
let fileName = "Readme.txt"


console.log("This was a piece of cake ")

function readFile(fileName, callback) {
    fs.readFile(fileName,"utf-8", (err, data) => {
        callback(err,data)
    })
}
readFile(fileName,(err,data)=>{
    if(err){
        console.log("Error While reading file ")
    }
    else{
        console.log(""+data)
    }
})