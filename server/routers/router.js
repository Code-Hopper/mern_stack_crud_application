import express from "express"

import { welcome, adminLogin, getDashboard } from "../controllers/controller.js"
import authAdmin from "../auth/authAdmin.js"

let router = express()

router.get("/", welcome)

router.post("/admin/login", adminLogin)

// protected route
router.get("/dashboard", authAdmin, getDashboard)

export default router