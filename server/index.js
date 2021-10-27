const express = require(`express`)
const mongoose = require(`mongoose`)
const config = require(`config`)
const fileUpload = require("express-fileupload")
const authRouter = require(`./routes/auth.routes.js`)
const fileRouter = require(`./routes/file.routes.js`)
const corsMiddleware = require(`./middleware/cors.middleware.js`)


const app = express()

const PORT = config.get(`PORT`)
const HOSTNAME = `127.0.0.1`
const serverAddress = `http://${HOSTNAME}:${PORT}`

app.use(corsMiddleware)
app.use(fileUpload({}))

 

app.use(express.json());
app.use(express.static('static'))
app.use("/api/auth", authRouter)
app.use("/api/file", fileRouter)


const start = async () => {
    try {

        await mongoose.connect("mongodb://localhost:27017/usersdb")

        app.listen(PORT,HOSTNAME, ()=> {
            console.log(`Server started on port`, PORT)
            console.log(`${serverAddress}`)
        })

    } catch(e){

    }
}

start()