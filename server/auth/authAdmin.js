import jwt from "jsonwebtoken"

import dotenv from "dotenv"
import adminModel from "../models/adminSchema.js"

dotenv.config({ path: "./config.env" })

let authAdmin = async (req, res, next) => {
    let token = req.headers.token
    try {

        let decoded = jwt.verify(req.headers.token, process.env.JWT_SECRECT)

        if (!decoded) {
            throw ("invalid token !")
        }

        console.log(decoded)

        let checkUser = await adminModel.findOne({ email: decoded.email })

        if(!checkUser){
            throw("user not found !")
        }

        req.user = decoded.email

        next()

    } catch (err) {
        res.status(400).json({ message: "Cannot access dashboard !", err })
    }
}

export default authAdmin