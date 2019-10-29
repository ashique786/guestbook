const mongoose = require('mongoose');
const schema = mongoose.Schema;
const signatureSchema = new schema ({
    guestSignature:{
        type:String,
        required:true
    },
    guestMessage:{
        type:String,
        required:true
    }
})
const Signature = mongoose.model('Signature',signatureSchema);
module.exports = Signature;