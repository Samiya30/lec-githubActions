const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get("/",(req,res)=>{
    ressend("ok")
})

mongoose.connect("mongod://127.0.0.1:27017/test")
.then(()=>console.log("db connected"))
app.listen(7687,()=>{
    console.log("server started");
})