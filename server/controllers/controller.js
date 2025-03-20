import { genrateToken } from "../auth/genrateToken.js"
import "../database/conn.js"

import adminModel from "../models/adminSchema.js"

let welcome = (req, res) => {
    console.log("welcome route called !")
    res.status(200).json({ message: "welcome !" })
}
let postHome = (req, res) => {
    console.log("post home route called !")
    console.log(req.body)
    res.status(202).json({message: "form submitted successfully !"})
}

let adminLogin = async (req, res) => {

    let responseData = {
        status: 0,
        message: ""
    }

    try {
        let { email, password } = req.body
        // check if we have email and password
        if (!email || !password) {
            responseData.message = "email or password is missing !"
            responseData.status = 400
            throw (responseData.message)
        }
        // here we have email and password | now verify with database

        // checking if admin exists 

        let adminExists = await adminModel.findOne({ "email": email })

        if (!adminExists) {
            responseData.message = "email does not exists !"
            responseData.status = 400
            throw (responseData.message)
        }

        // now compare the password

        let verifyPassword = await adminModel.findOne({ "email": email, "password": password })

        if (!verifyPassword) {
            responseData.message = "email and password does not match !"
            responseData.status = 401
            throw (responseData.message)
        }

        // create a token(JWT)

        let genratedToken = genrateToken(verifyPassword.email)

        // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsImlhdCI6MTc0MTc2NDE5NCwiZXhwIjoxNzQxNzY3Nzk0fQ.2H4Bm2iWfXqa1UlZCZx1bkxMQ8ImvUvUqW6GtEW7qIs

        if (!genratedToken) {
            responseData.message = "unable to login | token error try again later !"
            responseData.status = 500
            throw (responseData.message)
        }

        // now save the token into the database

        let result = await adminModel.updateOne({ "email": verifyPassword.email }, { $set: { "token": genratedToken } })

        console.log(result)

        res.status(202).json({ message: "email and password matched !", token: genratedToken })

    } catch (err) {
        console.log(err)
        res.status(responseData.status).json({ message: err })
    }
}

let getDashboard = (req, res) => {
    console.log("this is get dashboard")

    console.log("we got user after authAdmin : ", req.user)

    res.status(202).json({ message: "welcome admin to the dashboard " })
}

export { welcome, adminLogin, getDashboard, postHome }