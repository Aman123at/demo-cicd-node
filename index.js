const express = require("express")
const app = express()

app.get("/",(req,res)=>{
    res.json({"message":"HELLO TO CICD Service"})
})


app.listen(4000,()=>console.log("Server is running on port : 4000"))