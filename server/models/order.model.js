const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    userId: {
        type: Number,
        required: true,
        unique: true
    },
    type: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
        unique: true
    },
    quantity: {
        type: Number,
        required: true,
        unique: true
    },
    total: {
        type: Number,
        required: true,
        unique: true
    },
    orderLeft: {
        type: Number,
        required: true,
        unique: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
}, {
    versionKey: false
});


module.exports = mongoose.model('Order', OrderSchema);
