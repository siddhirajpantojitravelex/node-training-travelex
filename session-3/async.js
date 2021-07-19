const fs = require('fs')

async function readFile(pathToFile) {
    return new Promise((resolve, reject) => {
        console.log("Inside readFile File ")
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

async function writeFile(pathToFile, content) {
    console.log("Inside Write File ")
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

async function execute() {
    try {
        let data = await readFile("Readme.txt")
        console.log("Read Success ")
        await writeFile("CopyReadme.txt",data)
        console.log("Write Success ")
    } catch (error) {
        console.error("Error Occured in Execute ", error)
    }
    finally {
        console.log("Inside Finally ")
    }
}
execute()