import express from "express";
const router= express.Router();
import mongoose from "mongoose";
import "dotenv/config"

router.get("/loadData", async(req,res)=>{


    const FoodItem= await mongoose.connection.db.collection("foodItems");
    const FoodCategory= await mongoose.connection.db.collection("foodCategory");

    const foodItems= await FoodItem.find().toArray();
    const foodCategories= await FoodCategory.find().toArray();

    res.send([foodItems,foodCategories]);
})

export default router;