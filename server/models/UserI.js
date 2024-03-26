const mongoose  = require('mongoose')

const userSchema = new mongoose.Schema({
    userID:String,
    email:{
        type:String,
        unique:true,
    },
    createdAt:Date,
});
const userI = mongoose.model('UserI', userSchema);
module.exports = userI