const EmployeDirectory = require("../model/employeeDirectory")


exports.getEmployeDirectory = async (req,res)=>{
    try {
        const data = await EmployeDirectory.find()
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(500).json({errors:true,message:error.message})
    }
}

exports.postEmployeDirectory = async (req,res)=>{
    try {
        const data = await EmployeDirectory.create(req.body)
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(500).json({errors:true,message:error.message})
    }
}

exports.putEmployeDirectory = async (req,res)=>{
    try {
        const data = await EmployeDirectory.findByIdAndUpdate(req.params.id,req.body,{new:true})
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(500).json({errors:true,message:error.message})
    }
}

exports.deleteEmployeDirectory = async (req,res)=>{
    try {
        const data = await EmployeDirectory.findByIdAndUpdate(req.params.id)
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(500).json({errors:true,message:error.message})
    }
}

