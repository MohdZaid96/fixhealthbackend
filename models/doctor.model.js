const mongoose=require("mongoose")


const docSchema=new mongoose.Schema({
    img:{type:String,required:true},
    name:{type: String,required:true},
    specialization:{type: String,required:true},
    experience:{type: String,required:true},
    city:{type: String,required:true},
})



const DoctorModel=mongoose.model("doctor",docSchema);

module.exports={DoctorModel};