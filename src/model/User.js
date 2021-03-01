const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    username: { type:String, required: true, trimp: true },
    email: { type:String, required: true, trimp: true, unique: true, dropDups: true  },
    password: { type:String, required: true, trimp: true }

}, {
    timestamps: true
});

module.exports = model('User', userSchema);