/**
 * This module will generate a public and private keypair and save to current directory
 * 
 * Make sure to save the private key elsewhere after generated!
 */
import crypto from "crypto"
import fs from "fs";
import { fileURLToPath } from 'url';
import { dirname } from 'path';


// Get the directory name of the current module
const __dirname = dirname(fileURLToPath(import.meta.url));

// Generates an object where the keys are stored in properties `privateKey` and `publicKey`
const keyPair = crypto.generateKeyPairSync('rsa', {
    modulusLength: 4096, // bits - standard for RSA keys
    publicKeyEncoding: {
        type: 'pkcs1', // "Public Key Cryptography Standards 1" 
        format: 'pem' // Most common formatting choice
    },
    privateKeyEncoding: {
        type: 'pkcs1', // "Public Key Cryptography Standards 1"
        format: 'pem' // Most common formatting choice
    }
});

// Create the public key file
fs.writeFileSync(__dirname+ '/id_rsa_pub.pem', keyPair.publicKey); 

// Create the private key file
fs.writeFileSync(__dirname+  '/id_rsa_priv.pem', keyPair.privateKey);



