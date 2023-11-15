import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    JProfile:{
       type:String, 
        
    },
    photo:{
        type:String,  
     },
    CompanyName:{
        type: String,
        
    },
    JobLocation:{
        type: String,
        
    },
   JobExperience:{
        type: String,
        
    },
    JobType:{
        type:String,
    },
    JobDescription:{
        type:String,
    },
    JobDescription:{
        type:String,
    },
    JobSkills:{
        type:String,
    },
    JobRole:{
        type:String,
    },
    ApplyLink:{
        type:String,
    }
})


export default mongoose.model("User", userSchema);