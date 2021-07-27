const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ratingSchema = new Schema({
    user_id: {
        type: String, 
        required: false
    },
    product_id: {
        type: String, 
        required: false
    },
    product_name: {
        type: String, 
        required: false
    },
    seller_name: {
        type: String, 
        required: false
    },
    email: {
        type: String, 
        required: false
    },
    review: {
        type: Number,
        unique: false
    },
    name: {
        type: String,
        required: true
    },
    review: {
        type: String,
        unique: false
    },
    rating: {
        type: Number,
        unique: false
    },
    type: {
        type: String,
        required: false
    },
    status: {
		type: Boolean,
		default: false
	},
    created_at: {
        type: String,
    },
    updated_at: {
        type: String
    }
})
module.exports = mongoose.model('Rating', ratingSchema);