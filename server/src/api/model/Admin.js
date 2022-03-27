import mongoose from "mongoose";
import validator from "validator";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

const AdminSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Please enter your Email'],
        validate: {
            validator: validator.isEmail,
            message: "please provide valid email address"
        },
        unique: true
    },

    displayName: {
        type: String,
        required: [true, 'Please enter your Display Name'],
        minlength: 5,
        maxlength: 25,
        trim: true
    },

    password: {
        type: String,
        required: [true, 'Please provide pasword'],
        minlength: 6,
        select: false
    }
});

AdminSchema.pre('save', async function() {
    const salt = await bcryptjs.genSalt(10)
    this.password = await bcryptjs.hash(this.password, salt);
});

AdminSchema.methods.createJWT = function() {
    return jwt.sign({ userId: this._id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_LIFETIME })
};


AdminSchema.methods.comparePassword = async function(candidate) {
    const isMatch = await bcryptjs.compare(candidate, this.password);
    return isMatch;
};

export default mongoose.model('Admin', AdminSchema)