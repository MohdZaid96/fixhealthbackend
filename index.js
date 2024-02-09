const express=require("express");
const { connection } = require("./config/db");
const {TestimonialModel}=require("./models/testimonial.model");
const {DoctorModel}=require("./models/doctor.model");
const cors=require("cors")



const app=express();

app.use(express.json());
app.use(
    cors({
        origin:"*"
    })
);

app.get("/",(req,res)=>{
    res.send("Base API");
})




app.get("/doctor",async (req,res)=>{
    const {city}=req.query;
    try {
        if(city){
        const user=await DoctorModel.find({city:city?city:null});
        }else{
          const user=await DoctorModel.find();
        }
        res.send(user);
    } catch (error) {
        res.send(error)
    }

}); 

app.get("/testimonials",async (req,res)=>{
    try {
        const user=await TestimonialModel.find({});
        res.send(user);
    } catch (error) {
        res.send(error)
    }
});

app.post("/doc",async(req,res) => {
        
  
      

        try {
            data.map(async(elem)=>{
                const newTask=new DoctorModel({
                    img:elem.img,
                    name:elem.name,
                    specialization:elem.specialization,
                    experience:elem.experience,
                    city:elem.city
                })
        
                await newTask.save();
            })



            // const newTask=new TaskModel({
            //     img,
            //     name,
            //     specialization,
            //     experience
            // })

            // await newTask.save();
            console.log("task saved")
            res.send({msg:"Created"})
            
        } catch (error) {
            res.send(error)
        }

})
app.post("/tes",async(req,res) => {
   
      
    try {
        data.map(async(elem)=>{
            const newTask=new TestimonialModel({
                img:elem.img,
                name:elem.name,
                doctor:elem.doctor,
                msg:elem.msg
            })
    
            await newTask.save();
        })
        // const newTask=new TaskModel({
        //     img,
        //     name,
        //     doctor,
        //     msg
        // })

        // await newTask.save();
        console.log("task saved")
        res.send({msg:"Created"})
        
    } catch (error) {
        res.send(error)

    }

})


app.listen(process.env.PORT,async()=>{
    try {
        await connection;
        console.log("Server live on 8080")
    } catch (error) {
        console.log(error);
    } 

})

