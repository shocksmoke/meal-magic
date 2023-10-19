import mongoose from "mongoose";

const userSchema= new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    salt: {
        type: String,
        required: true
    },
    hash: {
        type: String,
        required: true
    },
    
    date: {
        type: Date,
        default: Date.now
    }
});

const User= mongoose.model('user',userSchema);

export default User;