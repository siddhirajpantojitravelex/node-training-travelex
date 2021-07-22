let CSVOperation = require('./csvReader')
const Child = require('./Child')
async function execute(){
    try {
        // let data = await CSVOperation.readCSVFile("names.csv")
        // console.log(data)
        let  singleObj = new Child()
        singleObj.parent()
        singleObj.childFunc()
    } catch (error) {
        console.log("Error Occured While Reading",error)
    }
}
execute()