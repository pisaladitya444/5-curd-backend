const Inventory = require("../model/InventoryTracker")

exports.getInventory = async (req,res)=>{
    try {
        const data = await Inventory.find()
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(500).json({errors:true,message:error.message})
    }
}

exports.postInventory = async (req,res)=>{
    try {
        const data = await Inventory.create(req.body)
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(500).json({errors:true,message:error.message})
    }
}

exports.putInventory = async (req,res)=>{
    try {
        const data = await Inventory.findByIdAndUpdate(req.params.id,req.body,{new:true})
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(500).json({errors:true,message:error.message})
    }
}

exports.deleteInventory = async (req,res)=>{
    try {
        const data = await Inventory.findByIdAndDelete(req.params.id)
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(500).json({errors:true,message:error.message})
    }
}

