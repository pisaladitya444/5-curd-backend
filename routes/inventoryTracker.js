const {getInventory,postInventory,putInventory,deleteInventory} = require("../controller/inventoryTrackerController")


const route = require("express").Router()


route.get("/",getInventory)
route.post("/",postInventory)
route.put("/:id",putInventory)
route.delete("/:id",deleteInventory)

module.exports = route




