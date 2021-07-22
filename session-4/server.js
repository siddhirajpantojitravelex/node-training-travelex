require('dotenv').config()
let app = require('./app')
const PORT = process.env.PORT
app.listen(PORT, (err) => {
    if (err) {
        console.log("Erroe in starting server at port " + PORT)
    }
    else {
        console.log("Server Started at "+PORT)
    }
})