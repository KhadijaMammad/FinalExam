import express from 'express'
import { SellinController } from '../controllers/SellingController.js'

 export const route = express.Router()

route.get("/",SellinController.getAllProducts)
route.delete("/:id", SellinController.deleteProduct)
route.post("/", SellinController.postProduct)