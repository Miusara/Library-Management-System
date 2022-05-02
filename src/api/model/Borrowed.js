const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const borrowedSchema = new Schema({
    
    regNo:{
        type:String,
        required:true
    },
    bookName:{
        type:String,
        required:true
    },
    issueDate :{
        type:String,
        required:true
    },

    returnDate :{
        type:String,
        required:true

    }

})

const Borrowed = mongoose.model("Borrowed",borrowedSchema);
module.exports = Borrowed;
