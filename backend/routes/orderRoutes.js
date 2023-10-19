import express from "express";
const router= express.Router();
import Order from "../models/Order.js";


router.post("/addOrder", async (req,res)=>{
    var order= await Order.findOne({email: req.body.email});
    var date= req.body.date;
    var foodItems= req.body.foodItems;

    if(order){
        var newOrderListItem= {date: date, foodItems: foodItems};
        order.orderList.push(newOrderListItem);
    }
    else{
        order= new Order({
            email: req.body.email,
            orderList: [{date: date, foodItems: foodItems}]
        });
    }
    
    await order.save();
    res.json({success: true, order: order})
})

router.post("/myorders", async(req,res,next)=>{
    var order= await Order.findOne({email: req.body.email});

    if(!order){
        res.status(400).json({error: "no orders found"});
    }
    else{
        res.json({orderList: order.orderList});
    }

})

export default router;