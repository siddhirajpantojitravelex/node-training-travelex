let CSVOperation = require('./csvReader')

async function execute(){
    try {
        let data = await CSVOperation.readCSVFile("names.csv")
        console.log(data)
    } catch (error) {
        console.log("Error Occured While Reading",error)
    }
}
execute()