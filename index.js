const express=require("express")
const app=express()
const jwt=require("jsonwebtoken")
const cookieParser=require("cookie-parser")

app.use(express.json())
const mongoose=require('mongoose')
// mongoose.connect("https://mongodb+srv://:@blogproject.vm1xjav.mongodb.net/?retryWrites=true&w=majority&appName=blogProject")

const model=require('./authDB')
app.use(express.json())
app.use(cookieParser())
app.get("/login",(req,res)=>{
    // const {email,password}=req;
    // model.find({email,password})
    // .then((obj)=>{
    //     if(obj.password===password){
    //        const accesstoken= jwt.sign({email,password},"token1",{expiresIn:"3m"})
    //        res.cookie("accestoken",accesstoken)
    //        return res.json({login:true})
    //     }else{
    //         return res.json({login:false})
    //     }
          
    // })
    // return res.json({login:false})  
})
app.get("/",(req,res)=>{
     console.log("jkk")
})
app.listen(3000,()=>{
    console.log(`server is running`)
})
