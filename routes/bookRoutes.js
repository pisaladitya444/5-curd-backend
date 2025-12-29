const { getBooks, postBook, putBook, deleteBooks } = require("../controller/booksController")

const route = require("express").Router()

route.get("/",getBooks)
route.post("/",postBook)
route.put("/:id",putBook)
route.delete("/:id",deleteBooks)

module.exports = route

