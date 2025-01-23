import { SellingModel } from "../models/SellingModel.js";

 export let SellinController = {
    getAllProducts: async (req,res) =>{
        let clothes =  await SellingModel.find()
        res.send(clothes)
    },
    deleteProduct: async  (req,res)=>{
        let {id}=req.params
       await SellingModel.findByIdAndDelete(id)
       res.send({
        message:"Success Delete",
    })
    },
    postProduct: async (req,res)=>{
        let newProduct = new SellingModel(req.body)
       await newProduct.save()
       res.send({
         message:"Success Post",
         data:req.body
       })
    },
    updateProduct: async (req,res)=>{
        let id=req.params.id
        let updateProduct=req.body
      let updatedProduct = await SellingModel.findByIdAndUpdate({_id:id},updateProduct,{new:true})
        res.send(updatedProduct)
    }
}