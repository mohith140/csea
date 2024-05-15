const mongoose=require("mongoose")
const schema=new mongoose.Schema({
    email:String,
    password:String
})
const x=mongoose.model("authdb",schema)
module.exports= x;