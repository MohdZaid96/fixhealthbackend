const mongoose=require("mongoose")


const tesSchema=new mongoose.Schema({
    img:{type:String,required:true},
    name:{type: String,required:true},
    doctor:{type: String,required:true},
    msg:{type: String,required:true},
    
},{timestamps:true})



const TestimonialModel=mongoose.model("testimonial",tesSchema);



module.exports={TestimonialModel};