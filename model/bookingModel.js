const mongoose = require('mongoose');

const bookingSchema = mongoose.Schema({
    _id:{
        type:Number
    },
    name:{
        type:String,
        required:true
    },
    number:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    date:{
        type:String,
        default:Date.now().toString,
        required:true
    },
    time:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        required:false
    },
    price:{
        type:Number,
        required:true
    },
    images:{
        type:Array,
        required:false
    }
});

module.exports = mongoose.model('Booking', bookingSchema);