const http = require("http")
const express = require("express")
const app = express()
const port = process.env.PORT || 2000
const server = http.createServer(app)
app.use(express.urlencoded({extended: true}))
app.use(express.json())

server.listen(port, () => {
    console.log("Server is running at port: 2000")
})

/* Router */
const mail = require("./mail")
app.use(mail)