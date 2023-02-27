const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
    {
        name:{
            type:String,
            required:[true, 'Please add a name']
        },
        email:{
            type:String,
            required:[true, 'please include an email']
        },
        password:{
            type:String,
            required:[true, 'please enter a password']
        },
        isAdmin:{
            type:Boolean,
            required:true,
            default:false
        },
    },
    {
        timestamps:true
    }
);

module.exports = mongoose.model('User', userSchema);