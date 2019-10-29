const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const axios = require('axios');
const parseurl = require('parseurl');
const path = require('path');
const expressValidator = require('express-validator');

const db_url = process.env.MONGOLAB_URI;
const Signature = require('./Signatures');
const app = express();

mongoose.connect(db_url, (err) => {
    if (err) {
        console.log('connection to mongoDB is not established error: ', err);
    } else {
        console.log('mongoDB connection is established at ', db_url);
    }

})
app.get('/home', (req, res) => {
    res.json('Great, you have done it !!');
    console.log('Great, you have done it !!')
});

app.get('/guestbook', (req, res) => {
    Signature.find({})
        .then(allSignatures => {
            res.json(allSignatures);
        })

})

app.get('/createSignature', (req, res) => {
    Signature.create({
        guestSignature: req.body.signatureOfGuest,
        message: req.body.messageOfGuest,
    }).then(signature => {
        res.json(signature);
    })
})

app.listen(process.env.PORT || 3000);
