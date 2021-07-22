const csv = require('csv')
const fs = require('fs')
class CSVOperation {

    static async readCSVFile(filePath) {
        try {
            let data = fs.readFileSync(filePath, "utf-8")
            let jsonData = await this.convertToJSON(data)
            
            return jsonData
        } catch (error) {
            console.error("Error While CSV Readeing ", error)
            throw error
        }
    }

    static async  convertToJSON(data) {
        return new Promise((resolve, reject) => {
            csv.parse(data, {
                delimiter: ","
            }, (err, records) => {
                if (err) {
                    reject(err)
                }
                else {
                    resolve(records)
                }
            })
        })
    }

    parent(){
        console.log("Inside Parent ")
    }
}
module.exports = CSVOperation