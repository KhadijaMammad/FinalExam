import mongoose from "mongoose";
import { Schema, model } from "mongoose";

const SellinhSchema = new Schema({
    image: String,
    name: String,
    degrees: Number,
    description: String,
})

export let SellingModel = mongoose.model("sell", SellinhSchema)