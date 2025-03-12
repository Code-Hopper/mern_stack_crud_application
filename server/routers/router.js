import express from "express"

import { welcome, adminLogin } from "../controllers/controller.js"

let router = express()

router.get("/", welcome)

router.post("/admin/login", adminLogin)

export default router