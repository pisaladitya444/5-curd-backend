const mongoose = require("mongoose")

const employeDirectorySchema = new mongoose.Schema({
    fullName:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    department:{
        type:String,
        require:true
    },
    dateOfJoining:{
        type:String,
        require:true
    },
    salary:{
        type:Number,
        require:true
    }
},{timestamps:true})

module.exports = mongoose.model("EmployeDirectory",employeDirectorySchema)