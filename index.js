const express = require("express")
const app = express()

app.get("/",(req,res)=>{
    res.json({"message":"HELLO TO CICD Service"})
})

app.get("/demo",(req,res)=>{
    res.json({"message":"This is demo endpoint. To check everything is working fine."})
})


app.listen(4000,()=>console.log("Server is running on port : 4000"))