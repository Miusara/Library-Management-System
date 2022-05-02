const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    
    regNo:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    dob :{
        type:String,
        required:true
    },

    address :{
        type:String,
        required:true
    },


	email :{
        type:String,
        required:true
    },
	
	 phoneNo :{
        type:String,
        required:true
    },
	
    nic:{
        type:String,
        required:true
    },

    shift :{
        type:String,
        required:true
    },
   
    regDate :{
        type:String,
        required:true
   
    }

})

const User = mongoose.model("User",userSchema);
module.exports = User;
