const mongoose=require("mongoose")
const loginSchema=mongoose.Schema({
    name:String,username:String,password:String
})

const loginmodel=mongoose.model("logininfo",loginSchema)
module.exports=loginmodel