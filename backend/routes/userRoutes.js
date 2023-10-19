import express from "express";
const router= express.Router();
import User from "../models/User.js";
import {genSaltHash,verifyPassword,issueToken} from "../utils/passwordUtils.js"


router.post("/addUser", async (req,res)=>{
    var saltHash= genSaltHash(req.body.password);

    const user= new User({
        name: req.body.name,
        email: req.body.email,
        salt: saltHash.salt,
        hash: saltHash.hash,
        address: req.body.address,
    });
    await user.save();
    res.send({success: true, user: user});
})

router.post("/loginUser", async (req,res)=>{
    var user= await User.findOne({email: req.body.email});

    if(!user)
    {
        res.status(400).json({error: "user is not found."})
    }
    else
    {
        if(!verifyPassword(user.salt,user.hash,req.body.password))
        {
            res.status(400).json({error: "Enter valid Password"});
        }
        else
        {
            var token= issueToken(user);
            console.log(token);
            res.json({success: true, authToken: token});
        }
    }

})


export default router;
