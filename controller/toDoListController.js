const ToDoList = require("../model/to-do-list")

exports.getToDoList = async (req, res) => {
    try {
        const data = await ToDoList.find()
        return res.json({ errors: false, data: data })
    } catch (error) {
        return res.status(500).json({ errors: true, message: error.message })
    }
}

exports.postToDoList = async (req, res) => {
    try {
        const data = await ToDoList.create(req.body)
        return res.json({ errors: false, data: data })
    } catch (error) {
        return res.status(500).json({ errors: true, message: error.message })
    }
}

exports.putToDoList = async (req, res) => {
    try {
        const data = await ToDoList.findByIdAndUpdate(req.params.id, req.body, { new: true })
        return res.json({ errors: false, data: data })
    } catch (error) {
        return res.status(500).json({ errors: true, message: error.message })
    }
}

exports.deleteToDoList = async (req, res) => {
    try {
        const data = await ToDoList.findByIdAndDelete(req.params.id)
        return res.json({ errors: false, data: data })
    } catch (error) {
        return res.status(500).json({ errors: true, message: error.message })
    }
}

