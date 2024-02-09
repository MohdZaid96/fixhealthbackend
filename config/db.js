const mongoose=require("mongoose");
require("dotenv").config();

const connection=mongoose.connect(process.env.MONGO_URL).then((res)=>{
    console.log("Connected to DB")
}).catch((err)=>{
    console.log("db Error: "+err);
    
})

module.exports={connection};