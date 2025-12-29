const {getToDoList,postToDoList,putToDoList,deleteToDoList} = require("../controller/toDoListController")

const route = require("express").Router()


route.get("/",getToDoList)
route.post("/",postToDoList)
route.put("/:id",putToDoList)
route.delete("/:id",deleteToDoList)


module.exports = route

