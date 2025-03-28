import mongoose from "mongoose";

let entrySchema = mongoose.Schema({
    name: String,
    phone: String,
    dob: String,
    student: Boolean,
    address: String,
    email: String
})