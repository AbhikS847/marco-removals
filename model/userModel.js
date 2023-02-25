const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
    {
        email:{
            type:String,
            required:true
        },
        password:{
            type:String,
            required:true
        }
    }
);

modules.export = mongoose.model('User', userSchema);