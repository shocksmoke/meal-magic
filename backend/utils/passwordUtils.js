import crypto from "crypto";
import jwt from "jsonwebtoken";
import fs from "fs";
import path from "path";

const PRIV_KEY = fs.readFileSync("./id_rsa_priv.pem", 'utf8');




function genSaltHash(password){

    const salt = crypto.randomBytes(16).toString('hex');
    // Create a hash with the salt
    const hash = crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString('hex');

    return {
        salt: salt,
        hash: hash
    };
}

function verifyPassword(salt,hash,password){
    const hashVerify = crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString('hex');

    return hashVerify==hash;

}

function issueToken(user){
    var payload= {
        _id: user._id
    }

    return jwt.sign(payload,PRIV_KEY,{ algorithm: 'RS256' });


}

export {genSaltHash,verifyPassword,issueToken};

