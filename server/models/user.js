const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const Schema = mongoose.Schema;

//create a schema 
const userSchema = new Schema({
  
    userName:{type:String,required:true,unique:true},
    
    password: { type: String, required: true },

  
    
});

userSchema.pre('save', async function (next) {
    try {
        //Generate a salt
        const salt = await bcrypt.genSalt(10);
        //Generate a password hash (salt + hash)
        const passwordhash = await bcrypt.hash(this.password, salt);
        //Re-assign hashed version  over original , plan text password
        this.password = passwordhash;
        next();

    } catch (error) {
        next(error);
    }
});
userSchema.methods.isValidPassword = async function (newpassword) {
    try {
        return await bcrypt.compare(newpassword, this.password)
    } catch (error) {
        throw new Error(error);
    }
}

//create a model

const User = mongoose.model('user', userSchema);
//Export the model
module.exports = User;