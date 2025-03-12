import express from "express"
import dotenv from "dotenv"
import bodyParser from "body-parser"

dotenv.config({ path: "./config.env" })

import router from "./routers/router.js"


let port = process.env.PORT || 3066

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.json())

app.use(router)

app.listen(port, () => {
    console.log(`server is running on port ${port} || http://localhost:${port} !`)
})