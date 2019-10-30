const express = require('express');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const signatureSchema = new Schema ({
    name:{
        type: String,
        required:true
    },
    message:{
        type: String,
        required:true
    }
})
const Signature = mongoose.model('guestsignatures',signatureSchema);
module.exports = Signature;