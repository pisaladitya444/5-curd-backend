const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const bookRoutes = require("./routes/bookRoutes")
const toDoList = require("./routes/to-do-listRoutes")
const inventoryTracker = require("./routes/inventoryTracker")
const employeDirectory = require("./routes/employeDirectoryController")
const blog = require("./routes/blogRoutes")


const app = express()



app.use(express.json())
app.use(cors())
app.get("/",(req,res)=>{
    res.send("HOme")
})

app.use("/api/book",bookRoutes)
app.use("/api/todo",toDoList)
app.use("/api/inventory",inventoryTracker)
app.use("/api/employe",employeDirectory)
app.use("/api/blog",blog)



app.listen(5000,()=>{
    console.log("listening on port");
})


async function dB() {
    try {
        const res = await mongoose.connect("mongodb+srv://adityapisal:adityapisal@cluster0.i39llby.mongodb.net/?appName=Cluster0")
        console.log(res.default.STATES.connected);
    } catch (error) {
        console.log(error.message);
    }
}


dB()
