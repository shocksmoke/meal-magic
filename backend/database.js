import mongoose from "mongoose";
import "dotenv/config"



export default async function connectDatabase(){    
    await mongoose.connect(process.env.DB_STRING)
    .catch((err)=>{if(err)console.log(err);})
}

