const { Schema, model } = require('mongoose');

const productSchema = new Schema({
    name: { type:String, required: true, trimp: true, unique:true, dropDups: true  },
    description: { type:String, required: true, trimp: true },
    price: { type:Number, required: true, trimp: true }
}, {
    timestamps: true
});

module.exports = model('Product', productSchema);