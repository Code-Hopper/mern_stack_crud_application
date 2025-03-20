import express from "express"
import dotenv from "dotenv"
import bodyParser from "body-parser"
import cors from "cors"

dotenv.config({ path: "./config.env" })

import router from "./routers/router.js"


let port = process.env.PORT || 3066

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))

let corsOptions = {
    origin: "*",
    methods: "*"
}

app.use(cors(corsOptions))

app.use(express.json())

app.use(router)

app.listen(port, () => {
    console.log(`server is running on port ${port} || http://localhost:${port} !`)
})