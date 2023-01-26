const mongoose = require('mongoose');

const quoteSchema = mongoose.Schema({
    _id:{
        type:Number
    },
    name:{
    type:String,
    required:true
    },
    email:{
        type:String,
        required:true
    },
    number:{
        type:Number,
        required:true
    },
    desc:{
        type:String,
    }
});

const quoteModel = mongoose.model('Quote', quoteSchema);

module.exports = quoteModel;