const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const axios = require('axios');
const parseurl = require('parseurl');
const path = require('path');
const dbr = process.env.MONGOLAB_URI;

//const db_url = process.env.MONGOLAB_URI ;
const Signature = require('./GuestSignatures');
const app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

mongoose
    .connect(dbr)
    .then(() => {
        console.log(' Hey Ashique MOngoDB connected')
    })
    .catch((err) => {
        console.log(err)
    });
app.get('/', (req, res) => {
    res.json('Great, you have done it !!');
    console.log('Great, you have done it !')
});

app.get('/guestbook', (req, res) => {
    Signature.find({})
        .then(allSignatures => {
            res.json(allSignatures);
        })

})

app.post('/createSignature', (req, res) => {
    const newSignature = new Signature({
        name : req.body.guestName,
        message : req.body.guestMessage
    })
    newSignature.save()
        .then(signature => {
        res.json(signature)})
        .catch(err => console.log(err))
})

app.listen(process.env.PORT || 6000);

