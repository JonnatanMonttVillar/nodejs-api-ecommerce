const { Schema, model } = require('mongoose');

const categorySchema = new Schema({
    name: {type:String, required: true, trimp: true, unique: true, dropDups: true  }
}, {
    timestamps: true
});

module.exports = model('Category', categorySchema);