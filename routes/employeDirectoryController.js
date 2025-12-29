const {getEmployeDirectory,postEmployeDirectory,putEmployeDirectory,deleteEmployeDirectory} = require("../controller/employeDirectoryController")

const route = require("express").Router()

route.get("/",getEmployeDirectory)
route.post("/",postEmployeDirectory)
route.put("/:id",postEmployeDirectory)
route.delete("/:id",deleteEmployeDirectory)

module.exports = route
