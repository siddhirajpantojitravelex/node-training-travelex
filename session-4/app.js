const express = require('express')
let app = express()
app.get("/hello", (req, res, next) => {
    res.json({
        "message": "hello World "
    })
})

app.use("*", (req, res, next) => {
    let err = {
        status: 404,
        "message": "Resource Not Found "
    }
    next(err)
})

app.use((err, req, res, next) => {
    // This is a Global Error handler 
    if (!err.status) {
        err.status = 500
        err.message = "Something went Wrong "
    }
    res.json(err).status(err.status)
})
module.exports = app
