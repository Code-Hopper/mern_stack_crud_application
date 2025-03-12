import jwt from "jsonwebtoken"

import dotenv from "dotenv"

dotenv.config({ path: './config.env' })

let genrateToken = (email) => {

    try {

        if (!email) {
            throw ("email not recieved !")
        }

        let user = {
            "email": email
        }

        let secretKey = process.env.JWT_SECRECT

        let option = {
            expiresIn: "1hr"
        }

        let token = jwt.sign(user, secretKey, option)

        return token

    } catch (err) {
        console.log(err)
        return null
    }

}
export { genrateToken }