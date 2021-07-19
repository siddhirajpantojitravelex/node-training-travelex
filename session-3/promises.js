const fs = require('fs')

function readFile(pathToFile) {
    return new Promise((resolve, reject) => {
        fs.readFile(pathToFile, (err, data) => {
            if (err) {
                reject(err)
            }
            else {
                resolve(data)
            }
        })
    });
}

function writeFile(pathToFile, content) {
    return new Promise((resolve, reject) => {
        fs.writeFile(pathToFile, content, (err, data) => {
            if (err) {
                reject(err)
            }
            else {
                resolve(data)
            }
        })
    });
}

// function execute(){
//     readFile("Readme.txt").then(data=>{
//         console.log("Data Found = "+data)
//         writeFile("DontReadme.txt",data).then((data)=>{
//             console.log("Write Success ")
//         })
//     }).catch(err=>{
//         console.log("Error Occured while Reading File "+err)
//     }).finally(()=>{
//         console.log("Inside Finallly ")
//     })
// }

function execute() {
    new Promise(function (resolve, reject) {

        setTimeout(() => resolve(1), 1000); // (*)

    }).then(function (result) { // (**)

        console.log(result); // 1
        return result * 2;

    }).then(function (result) { // (***)

        console.log(result); // 2
        return result * 2;

    }).then(function (result) {

        console.log(result); // 4
        return result * 2;

    });
}
execute()

// Chaining of Promises 