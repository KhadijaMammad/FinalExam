import express from "express";
import { config } from "dotenv";
import cors from 'cors'
import { route } from "./router/SellingRouter.js";
import './config/config.js'


const app = express()
app.use(cors())
app.use(express.json())
config()

app.use("/sell", route)

app.listen(5000, ()=>{
    console.log("app listened in port 5000");
})
