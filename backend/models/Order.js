import mongoose from "mongoose";

const orderSchema= new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    orderList: {
        type: Array,
        required: true
    }
});

const Order= mongoose.model('order',orderSchema);

export default Order;