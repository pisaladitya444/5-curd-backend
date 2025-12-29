const mongoose = require("mongoose")


const inventorySchema = new mongoose.Schema({
    productName:{
        type:String,
        require:true
    },
    category:{
        type:String,
        require:true
    },
    price:{
        type:Number,
        require:true
    },
    stockQuantity:{
        type:Number,
        require:true,
    },
    sku:{
        type:String,
        require:true
    }
},{timestamps:true})

module.exports = mongoose.model("Inventory",inventorySchema)