const mongoose = require("mongoose")

const toDoListSchema = new mongoose.Schema({
    taskTitle:{
        type:String,
        require:true
    },
    description :{
        type:String,
        require:true
    },
    dueDate:{
        type:Date,
        require:true
    },
    priority:{
        type:String,
        require:true
    },
    status:{
        type:String,
        require:true
    }
},{timestamps:true})

module.exports = mongoose.model("ToDoList",toDoListSchema)

