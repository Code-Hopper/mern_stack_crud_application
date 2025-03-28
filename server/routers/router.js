import express from "express"

import { welcome, adminLogin, getDashboard, postHome, addEntry } from "../controllers/controller.js"
import authAdmin from "../auth/authAdmin.js"

let router = express()

router.get("/", welcome)

router.post("/", postHome)

router.post("/admin/login", adminLogin)

// protected route
router.get("/dashboard", authAdmin, getDashboard)

router.post("/addentry", authAdmin, addEntry)

export default router