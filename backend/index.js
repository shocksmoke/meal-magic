import express from "express";
import "dotenv/config"
import connectDatabase from "./database.js";
import userRoutes from "./routes/userRoutes.js"
import orderRoutes from "./routes/orderRoutes.js";
import displayDataRoutes from "./routes/displayData.js";
import cors from "cors";

 connectDatabase();

const app= express();

app.use(cors());

app.use(express.json());
app.use("/user",userRoutes);
app.use("/api",displayDataRoutes);
app.use("/api",orderRoutes);

app.get("/", (req,res)=>{
    res.send("Hello world");
})

app.listen(process.env.PORT, ()=>{
    console.log(`App is running on port ${process.env.PORT}`);
})
